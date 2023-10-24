def DOCKER_REPO="registry.gitlab.famtechvn.net/game/dragon-kart/web/kartbox-v2"
def DOCKER_IMAGE_NAME="kartbox-v2"
def GIT_COMMIT_DESC = ''
def ENV_CREDENTIAL=""
def STAGING_PORT="4004"

// Define notification build function
def notifyBuild(String buildStatus = 'STARTED', String GIT_COMMIT_DESC) {
    def colorCode = '#FF0000'
    def duration = "after ${currentBuild.durationString.replace(' and counting', '')}"
    def subject = "${env.JOB_NAME} - #${env.BUILD_NUMBER}"

    // Override default values based on build status
    if (buildStatus == 'STARTED') {
        colorCode = 'gray'
        duration = "Started <${env.BUILD_URL}console|:construction:>"
    } else if (buildStatus == 'SUCCESSFUL') {
        colorCode = 'good'
        duration = "Success ${duration} <${env.BUILD_URL}console|:confetti_ball:>"
    } else {
        colorCode = 'danger'
        duration = "Failed ${duration} <${env.BUILD_URL}console|:shit:>"
    }
    
    def summary = "${subject} ${duration} ${GIT_COMMIT_DESC == '' ? '' : '\n'}${GIT_COMMIT_DESC == '' ? '' : GIT_COMMIT_DESC}"
    
    // Send notifications
    slackSend (color: colorCode, message: summary)
}

notifyBuild('STARTED')

pipeline {
    agent any
    stages {
    	stage ('Deploy Staging') {
            when {
                anyOf {
                    environment name: 'GIT_BRANCH', value: 'staging';
                    environment name: 'GIT_BRANCH', value: 'origin/staging';
                    changeRequest(target: "staging")
                }
            }
            steps {
                script {
                    ENV = "staging"
                    GIT_COMMIT_DESC = sh(script: 'git log --format=oneline -n 1', returnStdout: true).trim()
                }

                echo "Deploy to staging environment"
                sh "docker build -t ${DOCKER_IMAGE_NAME}:stg ."
                sh "docker ps -a --filter \"name=${DOCKER_IMAGE_NAME}-stg\" | grep -q . && docker container stop ${DOCKER_IMAGE_NAME}-stg || echo not exist container ${DOCKER_IMAGE_NAME}-stg"
                sh "docker ps -a --filter \"name=${DOCKER_IMAGE_NAME}-stg\" | grep -q . && docker container rm ${DOCKER_IMAGE_NAME}-stg || echo not exist container ${DOCKER_IMAGE_NAME}-stg"
                sh "docker run -d -p 127.0.0.1:${STAGING_PORT}:3000 --restart always --net staging-share --env NODE_ENV=${ENV} --name ${DOCKER_IMAGE_NAME}-stg ${DOCKER_IMAGE_NAME}:stg"
                echo "Finish deploy to staging environment"
            }
        }
    }
    post {
        success {
            notifyBuild('SUCCESSFUL', GIT_COMMIT_DESC)
        }
        failure {
            notifyBuild('FAILED', GIT_COMMIT_DESC)
        }
    }
}
