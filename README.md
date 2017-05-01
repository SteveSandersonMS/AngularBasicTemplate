# AngularBasicTemplate

This is a work-in-progress project template that combines Angular with ASP.NET Core. It's based on the same technologies used in the [JavaScriptServices repo and templates](https://github.com/aspnet/javascriptservices), but simplified so it's more of an empty project starting point rather than an app starter kit. For simplicity, this template does not include server-side prerendering or Karma tests.

## Quickstart

1. `git clone` this repo.
2. `cd` to the resulting directory (i.e., the one containing `Startup.cs`).
3. Run `npm install` or `yarn`
4. Run `webpack --config webpack.config.vendor.js` (and first run `npm install -g webpack` if you don't already have it installed)
5. Run `dotnet restore`
6. Ensure you have an environment variable called `ASPNETCORE_ENVIRONMENT` with value set to `Development`. The way to do this depends on which OS/shell you are using.
7. Run `dotnet run`
8. Open a browser and navigate to [`http://localhost:5000/`](http://localhost:5000/)

You should see *Hello, world!* in your browser, which means your application is now running. You can now edit or add Angular components, templates, modules, etc. Since Hot Module Replacement (HMR) is enabled, your changes should appear in the browser immediately.

### To open in Visual Studio

* Complete steps 1-4 above
* Open `AngularBasicTemplate.csproj` in Visual Studio

You can now launch the application as usual via Ctrl+F5, or with debugging enabled via F5.

### To build a production-ready deployable site

Run `dotnet publish -c Release` from the command line, or use Visual Studio's *Publish* UI.

## Future plans

* Update to the latest version of Angular 4
* Convert into a `dotnet new` template that also automates steps 3-5 for you
* Convert into a regular Visual Studio project template
