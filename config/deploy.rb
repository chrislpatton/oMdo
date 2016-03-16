# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'skynet'
set :repo_url, 'git@github.com/BirdcageSleet/skynet.git'

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, '/var/www/my_app_name'

# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
# set :log_level, :debug

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml')

# Default value for linked_dirs is []
# set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system')

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5

namespace :deploy do

  #TODO: Add stop task in upstart
  desc "Stop Forever"
  task :started do
    on roles(:app) do
      execute "forever stopall"
    end
  end

  desc "Install node modules non-globally"
  task :npm_install do
    on roles(:app) do
      execute "cd #{current_path} && npm install --production -O"
    end
  end

  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      # This assumes you are using upstart to startup your application
      # - be sure that your upstart script runs as the 'deploy' user
      execute "cd #{current_path} && webpack webpack.production.config.js" 
      execute "forever start -o /var/www/skynet/server/log/skynet.log ", raise_on_non_zero_exit: false
    end
  end

  before :restart, 'deploy:npm_install'
end
