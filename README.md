<div align="center">
<h1>ITS Security</h1>
</div>
<div align="center">
<h3>Developed by Game The System</h3>
</div>

<div align="center">
<a href="https://hecoweb.azurewebsites.net/">Website</a> | <a href="https://devpost.com/software/electric-vehicle-charging-analysis-5dv7mo">DevPost</a>
</div>

## BUILD UI

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

Install the dependencies:

Be sure to be on the UI folder for all this instructions:
```
cd ui
```

Dependencies:

- [Node.js LTS](https://nodejs.org/en/)

```bash
npm i
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.




## BUILD WEB

### Requirements

PHP Version >= 7.1.3

Composer

### Install Composer and php-mbstring
```
sudo apt install php-mbstring
sudo apt install composer
```

Laravel Installer
```
composer global require laravel/installer
```


### Install Dependencies
Navigate to ./web/hecoweb to install dependencies
```
composer install
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

