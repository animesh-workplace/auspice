[![Build Status](https://travis-ci.com/nextstrain/auspice.svg?branch=master)](https://travis-ci.com/nextstrain/auspice)
[![GitHub CI Status](https://travis-ci.com/nextstrain/auspice.svg?branch=master)](https://github.com/nextstrain/auspice/actions?query=workflow%3Aci)
[![NPM version](https://img.shields.io/npm/v/auspice.svg?style=flat)](https://www.npmjs.com/package/auspice)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

## About Nextstrain

**Nextstrain** is an open-source project to harness the scientific and public health potential of pathogen genome data.
We provide a continually-updated view of publicly available data with powerful analytics and visualizations showing pathogen evolution and epidemic spread.
Our goal is to aid epidemiological understanding and improve outbreak response.

Resulting data and inferences are available live at the website [nextstrain.org](https://nextstrain.org).

## About Auspice

*Definition: Observation by an augur, ie a prophetic sign.*

**Auspice** is an open-source interactive web app for visualizing phylogenomic data.
It may be used in tandem with nextstrain's bioinformatics toolkit [augur](https://github.com/nextstrain/augur) or on its own.
Auspice may be used to explore datasets locally or run as a server to share results.

## Documentation

Full documentation may be found at: [nextstrain.github.io/auspice](https://nextstrain.github.io/auspice).
The following are helpful when beginning to use Auspice:

* [Overview of how Auspice fits together with other Nextstrain tools](https://nextstrain.org/docs/getting-started/introduction#open-source-tools-for-the-community)  
* [Auspice documentation](https://nextstrain.github.io/auspice/introduction/overview)

## Quickstart

### NIBMG_auspice Installation

Install nvm using this command:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

restart the terminal or type the following:

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
then run:

```bash
nvm install --lts
```

Once installed execute the following commands:

```bash
git clone https://github.com/animesh-workplace/nibmg_auspice.git
cd nibmg_auspice/
npm install
npm run dev
```
Once the development server is on go to http://localhost:4000 to view the datasets

For production use:
```bash
npm run build
npm run view
```