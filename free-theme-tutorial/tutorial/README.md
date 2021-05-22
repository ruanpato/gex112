# Tutorial #

[🔙](https://ruanpato.github.io/gex112/free-theme-tutorial). This is a homework about Digital Certificates.

## Sumary ##

- [Tutorial](#tutorial)
  - [Sumary](#sumary)
  - [Quick start](#quick-start)
  - [Reference](#reference)

## Quick start ##

- Generate:

```bash
gpg --default-new-key-algo ed25519 --gen-key
```

- **Set your name;**
- **Set your Github commit email;**
- **Set an password to this key.**

```bash
gpg --list-secret-keys --keyid-format LONG
```

- **Copy content that are after / and previous date of sec**;

Ex:

```bash
sec   ed25519/3AA567BD3A9812C5 2021-05-22 [expires: 2021-08-10]
uid                          Hubot
ssb   4096R/42B317FD4BA89E7A 2021-05-22
```

- GPG key ID: "3AA567BD3A9812C5".

Type:

```bash
gpg --armor --export 3AA567BD3A9812C5
```

Will appear something like this:

```bash
-----BEGIN PGP PUBLIC KEY BLOCK-----

Public key osajkoiasjfioaskjfoaskfoaskfoaskfoaskfoasjfioashofjsdoiu423y58923u96621912_21391285912412897415u41
-----END PGP PUBLIC KEY BLOCK-----
```

Copy the content and [add to github](https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account).

After that add the GPG key on git using GPG key ID as the below example:

**Global scope:**

```bash
git config --global user.signingkey 3AA567BD3A9812C5
```

**Project scope:**

```bash
git config user.signingkey 3AA567BD3A9812C5
```

To sign commit use -S flag like:

```bash
git commit -S -m "commit signed"
```

To sign a tag use -s flag:

```bash
git tag -v v14.20
```

Example of Signed Commit <https://github.com/ruanpato/gex112/commit/ac21a6f48d6dd7329318458bb2d826c8c527e690>

## Reference ##

- [Github Docs](https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification)
