### git 自动切换 项目用户配置

#### 多工作空间自动切换user
**描述**

当我们在公司项目和个人项目之间切换时，通常需要手动设置 git 用户，如果项目比较多，设置就很麻烦，而且容易忘记。
可以通过 git 配置，设置不同的工作空间的默认 git user

**这种方式要求 使用相同git用户 的项目放在同一个工作空间**

**使用**
1. 查看 git 配置
```shell
cd ~/
cat .gitconfig
# .gitconfig 内容如下
[user]
	email = season8@github.com
	name = season8
```
2. 根据 git user 数量，复制 .gitconfig 并重命名为多个配置文件
3. 修改不同配置文件内的 name 和 email(github 的 email 推荐使用 no-reply email)
4. 修改原始 .gitconfig 文件
```shell
[includeIf "gitdir:D:/workspace/"]
  path = ~/.gitconfig-company
[includeIf "gitdir:D:/github/"]
  path = ~/.gitconfig-personal
```

**原理**

利用 git includeIf 命令，根据目录选择不同的 配置文件

**验证**

分别在两个 工作空间内执行命令：
```shell
# 创建测试目录
mkdir test-git
cd test-git
# 初始化 git配置
git init
# 查看 git user
git config --get user.name
git config --get user.email
# 删除测试目录
cd ../
rm -rf test-git
```