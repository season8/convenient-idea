#### git 自动切换 远程仓库密钥
**描述**

当我们本地连接不同的远程仓库时（比如公司仓库和个人github），使用的密钥是不同的，此时可以针对域名配置密钥

**使用**

1. 进入 ssh 配置目录
```shell
cd ~/.ssh
ls
```
2. 创建 config 文件，已有则直接编辑
3. 新增域名配置，多个域名按顺序配置多个即可
```
Host github.com
	HostName github.com
	User season8
	IdentityFile ~/.ssh/github_rsa	
```


**验证**

```shell
SSH -T git@github.com
# output
Hi season8! You've successfully authenticated, but GitHub does not provide shell access.
```
