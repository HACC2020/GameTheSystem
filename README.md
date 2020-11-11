<div align="center">
<h1>ITS Security</h1>
</div>
<div align="center">
<h3>Developed by Game The System</h3>
</div>

<div align="center">
<a href="https://hecoweb.azurewebsites.net/">Website</a> | <a href="https://devpost.com/software/electric-vehicle-charging-analysis-5dv7mo">DevPost</a>
</div>

# Building User Interface

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

Be sure to be on the UI folder for all this instructions:

```bash
cd ui
```

#### Requirements

- [Node.js LTS](https://nodejs.org/en/)

#### Install Dependences

```bash
npm i
# or
yarn install
```

#### Run Server

```bash
npm run dev
# or
yarn dev
```

## Building the server

### Requirements

- PHP >=7.3
- Composer
- [Laravel](https://laravel.com/docs/8.x)

### Install Composer and php-mbstring
```
sudo apt install php-mbstring
sudo apt install composer
```

Laravel Installer
```
composer global require laravel/installer
```

### Change to api directory
```
cd ../secur-IT
```

### Install Dependencies
```
composer install
```

Be sure to be on the secur-IT folder for all this instructions:
```
cd secur-IT
```

### Server Setup/Environment

Copy or rename the .env.example file to a file named .env

Generate a key
```
php artisan key:generate
```

### START SERVER

```
php artisan serve
```

