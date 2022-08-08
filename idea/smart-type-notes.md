### IDEA 智能类注释模板

**描述**

创建类时，自动检查当前项目是公司项目还是私人项目，从而生成差异化注释。

```java
/**
 * 公司项目注释例子 <br>
 * copyright © xxxx
 * @author xx@qiye.com <br>
 * @date 2022-06-14 <br>
 */

/**
 * 个人项目注释例子 <br>
 * @author season8 <br>
 * @since v1.1.3 <br>
 */
```

**使用方法**

1. 依次打开 IDEA->File->Settings->Editor->File and code templates
2. 选中 Includes Tab选项页面，选择 File Header
3. 复制 [smart-type-notes](./smart-type-notes.vm) 内容并粘贴到 File Header
4. 按 文件内容修改:
   + **_personalName：_** 个人用户名
   + **_companyName：_** 公司用户名
   + **_companyPackagePrefixes：_** 公司项目包名，可配置多个
   + **_companyProjects：_** 公司项目项目名，可多个
   + **_notes：_** 注释内容

**原理**

公司项目 package 前缀通常比较固定，设置好前缀后（可多个），将当前包名和前缀依次匹配，根据匹配结果，生成不同的注释内容。

**[smart-type-notes](./smart-type-notes.vm) 语法**：
[Apache Velocity template language](https://velocity.apache.org/engine/devel/user-guide.html#velocimacros)