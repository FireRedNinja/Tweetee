# Tweetee
You can't run this in eduroam

## Linux
### Install yarn
#### Ubuntu
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt-get update && sudo apt-get install yarn
```

#### Arch
```
sudo pacman -S yarn
```

Anything that goes wrong with that, follow [yarn](https://yarnpkg.com/en/) package page


### Setup
Pre-setup:
```
sudo ufw allow 19000
sudo ufw allow 19001
```

Setup:
```
git clone https://github.com/FireRedNinja/Tweetee.git
cd Tweetee/Tweetee
yarn install
yarn start
```