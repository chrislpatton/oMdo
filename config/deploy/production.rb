set :branch, 'staging'
set :application, 'skynet'
set :repo_url, 'git@github.com:BirdcageSleet/skynet.git'
set :deploy_to, '/var/www/skynet'
set :ssh_options, { :forward_agent => true}
set :stage, :production

server 'ec2-54-213-147-55.us-west-2.compute.amazonaws.com', user: 'ec2-user', roles: %w{web app}