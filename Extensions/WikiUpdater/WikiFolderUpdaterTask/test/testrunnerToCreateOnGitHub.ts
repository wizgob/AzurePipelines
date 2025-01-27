import {
    UpdateGitWikiFolder
    } from "../src/GitWikiFuntions";

function logInfo (msg: string) {
    console.log(msg);
}

function logError (msg: string) {
    console.log("\x1b[31m", msg);
}

// GitHub always needs the user ID
const user = "rfennell";
// If using 2FA this must be a PAT
const password = "<PAT>";
const repo = "github.com/rfennell/demorepo.wiki";

const localpath = "c:\\tmp\\test\\repo";
const targetFolder = "";
const sourceFolder = "./test";
const filter = `**/*.md` ;
const message = "A message";
const gitname = "BuildProcess";
const gitemail = "Build@Process";
const replaceFile = true;
const appendFile = true;
const tagRepo = false;
const tag = "";
const branch = "";
const injectExtraHeaders = false;
const sslBackend = null;
const protocol = "https";
const retries = "5";

UpdateGitWikiFolder(protocol, repo, localpath, user, password, gitname, gitemail, targetFolder, message,  sourceFolder, filter, logInfo, logError, replaceFile, appendFile, tagRepo, tag, injectExtraHeaders, sslBackend, branch, retries);
