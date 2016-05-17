# Stockholm Prayer Time

## Running Application

Make sure you already have [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download) installed on your machine.

Run the following commands on your terminal:

```bash
# Clone repository.
git clone https://github.com/risan/stockholm-prayer-time
cd stockholm-prayer-time

# Install dependencies.
npm install

# Run application.
npm start
```

## Build Application

Install [Electron Packager](https://github.com/electron-userland/electron-packager) globally.

```bash
npm install electron-packager -g
```

Inside the application directory, run the following command to build the application for all available platforms:

```bash
electron-packager . --all
```
