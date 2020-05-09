[![Forked from Nextstrain/auspice](https://img.shields.io/github/forks/nextstrain/auspice?label=Forked&style=social)](https://github.com/nextstrain/auspice)

## About NIBMG_auspice

**NIBMG_auspice** is an open-source project **[Forked from Nextstrain's Auspice]** meant to harness the scientific and public health potential of pathogen genome data.
We provide a continually-updated view of publicly available data with powerful analytics and visualizations showing pathogen evolution and epidemic spread.
Our goal is to aid epidemiological understanding and improve outbreak response.

Resulting data and inferences are available live at the website [Coming Soon].

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