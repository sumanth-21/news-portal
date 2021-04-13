
# TA UI Training

## HTML & CSS

### Pre-requisits
* [Node JS v8.10+](https://nodejs.org/en/download/releases/)
* Node Package Manager or NPM (Gets installed as a part of Node)
* Winows OS specific: 
	* [Git for Windows](https://gitforwindows.org/)
	* [Tortoise GIT](https://tortoisegit.org/) (optional)
* [Google Chrome](https://www.google.com/chrome/)
* [Visual Studio Code](https://code.visualstudio.com/download) or your [favorite editor](https://kinsta.com/blog/best-text-editors/)

## Clone the Repo
Make sure you have been added to the GIThub project [using SSH](git@github.com:ranveerkumar/news-portal-apr2020.git) or [using HTTPS](https://github.com/ranveerkumar/news-portal-apr2020.git)

In case you need access to the github project repo,, send an email to: [ranveerkumar@gmail.com](mailto://ranveerkumar@gmail.com)

One you have the access, Open a Node Command Prompt (Windows) or Terminal ( or Linux), and issue following commands in the same sequence:

*$ is just a symbolic representation of command prompt. On Windows, usually it's C:\\>*
*Use HTTPS option if you've not setup an SSH key on GITHub*

```bash
$ git clone https://github.com/ranveerkumar/news-portal-apr2020.git
$ npm install -g gulp
$ cd ta-ui-training-jan20
$ npm install
$ gulp
```

Above commands will:

1. Clone the basic scaffoloding setup on your machine from Github repo.
2. Install gulp globally on your machine (requires admin/sudo/root privilages)
3. Switch your current working directory to the code base directory.
4. Install the dependencies (required Node modules)
5. Starts the project in Watch mode, and all you need is to type the code and keep saving, rest will be done by gulp setup (also refreshes your page in the browser on change of any file in your code base).
