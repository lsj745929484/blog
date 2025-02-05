"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[642],{6262:(i,l)=>{l.A=(i,l)=>{const e=i.__vccOpts||i;for(const[i,t]of l)e[i]=t;return e}},3913:(i,l,e)=>{e.r(l),e.d(l,{comp:()=>d,data:()=>n});var t=e(641);const s=e.p+"assets/img/image-20241215135249179.451b7265.png",a=e.p+"assets/img/image-20241215131123199.eea39a3f.png",o={},d=(0,e(6262).A)(o,[["render",function(i,l){return(0,t.uX)(),(0,t.CE)("div",null,l[0]||(l[0]=[(0,t.Fv)('<h1 id="linux-命令集合" tabindex="-1"><a class="header-anchor" href="#linux-命令集合"><span>Linux 命令集合</span></a></h1><h2 id="mkdir-命令" tabindex="-1"><a class="header-anchor" href="#mkdir-命令"><span>mkdir 命令</span></a></h2><ol><li>命令说明：mkdir 创建目录命令</li><li>用法1：mkdir不加参数，路径（需要包含目录名称） <ol><li>绝对路径创建：<code>mkdir /opt/project</code></li><li>相对路径创建：<code>mkdir ../project/test</code></li></ol></li><li>用法2：<code>【-p】</code>递归创建 <ol><li><code>mkdir /opt/project/linux/lsj</code></li></ol></li><li>用法3：同时创建多个文件夹 <ol><li><code>mkdir ./dnf /opt/cs ../lol</code></li></ol></li><li>在同一目录下创建多个目录 <ol><li><code>mkdir -p /opt/game/{dnf,lol,cs}</code></li></ol></li></ol><h2 id="rmdir-命令" tabindex="-1"><a class="header-anchor" href="#rmdir-命令"><span>rmdir 命令</span></a></h2><ol><li>命令说明：删除空目录命令</li><li>语法：rmdir 目录的路径</li><li>要求：要删除的文件夹，里面没有数据，方可删除，否则提示该文件夹不为空</li><li><code>rmdir /opt/project/linux/test</code>，如果test目录不为空，则会删除失败。</li></ol><h2 id="touch-命令" tabindex="-1"><a class="header-anchor" href="#touch-命令"><span>touch 命令</span></a></h2><ol><li>命令说明：创建文件命令，多次创建不报错</li><li>创建多个文件，不写路径，等同于 ./：<code>touch lsj.txt linux.txt</code></li><li>创建多个文件，带上路径：<code>touch /opt/test/lsj.txt /opt/test/linux.txt</code></li><li>复杂写法，在多个目录下创建：<code>touch /opt/lsj/lsj.txt /opt/linux/linux.txt</code></li><li>在同一目录下创建多个文件：<code>touch /opt/game/{dnf,lol,cs}</code></li></ol><h2 id="rm-命令" tabindex="-1"><a class="header-anchor" href="#rm-命令"><span>rm 命令</span></a></h2><ol><li>命令说明：删除命令</li><li>参数 <ol><li><code>【-r】</code> `递归删除，主要用于删除目录，可删除指定目录及包含的所有内容，包括所有子目录和文件</li><li><code>【-f】</code>强制删除，不提示任何信息，操作前一定要慎重！！</li><li><code>【-i】</code>删除前需要确认</li></ol></li><li>用法 <ol><li>删除一个文件：<code>rm /opt/test/test1.html</code></li><li>删除多个文件：<code>rm ./test.html /opt/test/test1.html</code></li><li>强制删除：<code>rm -f /opt/test/test1.html</code></li><li>删除目录：<code>rm -r /opt/test</code></li><li>删除前确认：<code>rm -i /opt/test/test1.html</code></li><li>强制递归删除所有目录及文件：<code>rm -rf /opt/test</code></li></ol></li></ol><h2 id="cp-命令" tabindex="-1"><a class="header-anchor" href="#cp-命令"><span>cp 命令</span></a></h2><ol><li>命令说明：拷命令贝</li><li>参数 <ol><li><code>【-r】</code>递归拷贝</li></ol></li><li>用法 <ol><li>拷贝文件，且改名：<code>cp /opt/lol/mid/yasuo.txt /home/tuoersuo.txt</code></li><li>仅仅拷贝单个文件，保持源文件名：<code>cp /opt/lol/mid/yasuo.txt /</code></li><li>拷贝文件夹，递归拷贝：<code>cp -r 源文件夹路径 目标文件夹路径</code></li><li>注意：目标目录是否存在同名文件夹，存在则移动到它的目录中去</li></ol></li></ol><h2 id="mv-命令" tabindex="-1"><a class="header-anchor" href="#mv-命令"><span>mv 命令</span></a></h2><ol><li>命令说明：移动、剪切、重命名命令</li><li>用法 <ol><li>移动单个文件：<code>mv /opt/lol/yasuo.txt /home/lsj</code></li><li>不移动文件的重命名：<code>mv /opt/lol/yasuo.txt /opt/lol/tuoersuo.txt</code></li><li>移动文件的重命名：<code>mv /opt/lol/yasuo.txt /home/lsj/tuoersuo.txt</code></li><li>注意：目标目录是否存在同名文件夹，存在则移动到它的目录中去</li></ol></li></ol><h2 id="tar-命令" tabindex="-1"><a class="header-anchor" href="#tar-命令"><span>tar 命令</span></a></h2><ol><li>命令说明：打包、压缩、解压缩命令，tar 实现的是打包、压缩还是解压缩，具体要看使用的哪个参数。</li><li>后缀说明： <ol><li>*.tar 仅仅是打包了</li><li>*.tar.gz 打包+压缩</li><li>*.tgz 打包+压缩</li></ol></li><li>参数 <ol><li><code>【-c】</code>create 创建的意思，打包使用</li><li><code>【-v】</code>显示打包文件过程</li><li><code>【-f】</code>指定打包的文件名，此参数是必须加的，且必须在最后以为</li><li><code>【-u】</code>update 更新原打包文件中的文件</li><li><code>【-t】</code>查看打包的文件内容（不解压查看压缩包内的内容）</li><li><code>【-x】</code>解包，解压缩（将一个单个的压缩文件，解压其中内容）</li><li>【<code>-z】</code>压缩操作参数，是 tar 命令调用 gzip 命令的过程</li><li><code>【-j】</code>压缩为 .bz2 格式</li><li><code>【-J】</code>压缩为 .xz 格式</li></ol></li><li>打包、解包用法 <ol><li>文件打成 tar 包，指定文件进行打包：<code>tar -cvf all-txt-opt.tar 1.txt 3.txt 4.txt</code></li><li>查看压缩文件内容：<code>tar -tf all-txt-opt.tar</code></li><li>追加文件到已存在的压缩包内：<code>tar -uf all-txt-opt.tar /opt/test/index.html</code></li><li>解包、拆包、拆包打开文件：<code>tar -xvf all-txt-opt.tar</code></li></ol></li><li>压缩用法</li><li>打包并压缩：<code>tar -czvf all_files.tar.gz 1.txt 3.txt 4.txt</code></li></ol><h2 id="zip-命令" tabindex="-1"><a class="header-anchor" href="#zip-命令"><span>zip 命令</span></a></h2><ol><li>命令说明：打包、压缩命令，兼容 unix 与 windows，可以压缩多个文件或目录</li><li>参数 <ol><li><code>【-r】</code>递归压缩（压缩文件夹）</li></ol></li><li>用法 <ol><li>打包多个文件：<code>zip all_files.zip 1.txt 3.txt 4.txt</code></li><li>打包文件夹：<code>zip -r all_files_folder.zip 1.txt test/</code></li></ol></li></ol><h2 id="unzip-命令" tabindex="-1"><a class="header-anchor" href="#unzip-命令"><span>unzip 命令</span></a></h2><ol><li>命令说明：解压缩命令，兼容 unix 与 windows</li><li>参数 <ol><li><code>【-d】</code>表示指定文件解压缩之后要存储的目录</li></ol></li><li>用法 <ol><li>解压压缩包到指定目录：<code>unzip -d all_files_folder.zip /opt/test/</code></li></ol></li></ol><h2 id="cat-命令" tabindex="-1"><a class="header-anchor" href="#cat-命令"><span>Cat 命令</span></a></h2><ol><li><p>命令说明：查看文件内容</p></li><li><p>语法：<code>cat index.txt</code></p></li><li><p>注意：cat 命令是一次性把文件内容全部读取出来，如果文件内容过大，有可能会导致机器卡死，并且你也看不到想要看的内容，因此 cat 命令不适合读取大文件，适合阅读内容较少的文件。（可以结合 Linux 其他命令来二次加工大文件）</p></li><li><p>用法：</p><ol><li><p>查看用户信息有哪些：<code>cat /etc/passwd</code></p></li><li><p>添加参数<code>【-n】</code>显示行号：<code>cat -n /etc/passwd</code></p></li><li><p>不适合读取大文件，显示也不友好：<code>cat /var/log/messages</code></p></li><li><p>还可以连续读取多个我呢见，并且显示多个文件一共多少行：<code>cat -n text.txt hello.txt python.txt</code></p></li><li><p>结合重定向符号使用：</p><ol><li><code>&lt;</code>：重定向覆盖输出符，数据从左边，覆盖写入到右边，例如：<code>cat hehe.txt test.txt &gt; ./two_files.txt</code></li><li><code>&gt;</code>：重定向覆盖输入符，数据从右边，覆盖写入到左边</li><li><code>&gt;&gt;</code>：重定向追加输出符，数据从左边，追加写入到右边</li><li><code>&lt;&lt;</code>：重定向追加输入符，数据从右边，追加写入到左边</li></ol></li><li><p>实现文本内容写入，cat 命令和重定向符号结合使用，写法如下，一般用于写入多行数据，其中 EOF 关键字是 end of file 缩写：</p><ol><li><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt;&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">古诗2.txt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">你的数据写在这里···</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>证明文件存在空行的办法：</p><ol><li>参数<code>【-b】</code> 只会对有内容的行显示行号，空行不显示</li><li>参数<code>【-E】</code> 在 Linxu 文件中，每一行的结束，默认会添加一个你看不到的特殊符号<code>$</code> ，表示是该行的结尾，可以用于查看文件内的字节数，一个英文字母一个字节。</li></ol></li></ol></li></ol><h2 id="tac-命令" tabindex="-1"><a class="header-anchor" href="#tac-命令"><span>tac 命令</span></a></h2><ol><li>命令说明：将文件从后向前倒着查看</li><li>语法：<code>tac index.txt</code></li></ol><h2 id="more-命令" tabindex="-1"><a class="header-anchor" href="#more-命令"><span>more 命令</span></a></h2><ol><li>命令说明：分屏查看文件内容，一般用于读取较多内容文件，如小说文件。</li><li>特点：more 和 cat 一样，会一次性读取文件所有内容到内存中，比较消耗资源，不适合太大文件。</li><li>语法：<code>more xiaoshuo.txt</code></li><li>用法： <ol><li><code>空格</code>--翻页</li><li><code>回车</code>--下一行</li></ol></li></ol><h2 id="less-命令" tabindex="-1"><a class="header-anchor" href="#less-命令"><span>less 命令</span></a></h2><ol><li>命令说明：显示多少文本，消耗多少内存，比较省资源</li><li>语法：<code>less xiaoshuo.txt</code></li><li>用法： <ol><li><code>空格</code>--翻页</li><li><code>回车</code>--下一行</li></ol></li></ol><h2 id="head-命令" tabindex="-1"><a class="header-anchor" href="#head-命令"><span>head 命令</span></a></h2><ol><li>命令说明：查看文件的默认前10行</li><li>语法：<code>head xiaoshuo.txt</code></li><li>查看文件的前100行：<code>head -100 xiaoshuo.txt</code></li></ol><h2 id="tail-命令" tabindex="-1"><a class="header-anchor" href="#tail-命令"><span>tail 命令</span></a></h2><ol><li>命令说明：查看文件的默认后10行</li><li>语法：<code>tail xiaoshuo.txt</code></li><li>查看文件的后100行：<code>tail -100 xiaoshuo.txt</code></li><li>【重点】实时刷新文件内容： <ol><li><code>【-f】</code>：跟踪文件内容变化，但是需要文件正常退出后才可见，该参数最为常用，常用于检测程序的日志变化（程序代码，追加新内容到文件中）：<code>tail -f xiaoshuo.txt</code></li><li><code>【-F】</code>：能够对文件进行刷新读取，即使该文件不存在，也可以检测</li></ol></li></ol><h2 id="wc-命令" tabindex="-1"><a class="header-anchor" href="#wc-命令"><span>wc 命令</span></a></h2><ol><li>命令说明：单词统计（word count）</li><li>作用：用来统计文件内的信息，一般统计如行数、单词数、字节数</li><li>参数： <ol><li><code>【-l】</code>：表示 lines，行数（回车/换行符为标准）</li><li><code>【-w】</code>：表示 words，单词数，按照空格来判断单词数量</li><li><code>【-c】</code>：表示 bytes，字节数（空格、回车、换行）</li></ol></li><li>用法： <ol><li>获取某个文件的行数：<code>wc -l xiaoshuo.txt</code></li><li>统计某个文件夹下所有文件行数：<code>wc -l ./</code></li><li>统计文件内的单词数量：<code>wc -w xiaoshui.txt</code></li></ol></li></ol><h2 id="du-命令" tabindex="-1"><a class="header-anchor" href="#du-命令"><span>du 命令</span></a></h2><ol><li>命令说明：查看文件或目录（会递归显示目录）占用磁盘空间大小</li><li>语法：du [参数选项] 文件名或目录名</li><li>参数： <ol><li><code>【-s】</code>：summaries，只显示汇总的大小，统计文件夹的大小</li><li><code>【-h】</code>：表示以高可读性的形式进行展示，如果不写 -h，默认以 KB 的形式显示文件大小</li></ol></li><li>用法： <ol><li>显示文件夹的大小：<code>du -h /opt</code></li><li>查询当前文件夹下文件大小：<code>du -h *</code></li><li>查看日志文件夹大小：<code>du -sh /var/log</code></li></ol></li></ol><h2 id="find-命令" tabindex="-1"><a class="header-anchor" href="#find-命令"><span>find 命令</span></a></h2><ol><li>命令说明：用于搜索整个 Linux 系统中的文件、文件夹，便于你找出机器上的文件。</li><li>语法：<code>find 搜索路径 选项1 选项1的值 选项2 选项2的值</code></li><li>参数： <ol><li><code>【-name】</code>：指定文件夹名字，指定你要搜索的文件名字叫什么，以及可以填入 * 表示通配符，模糊搜索</li><li><code>【-type】</code>：指定文件类型，文件还是文件夹，还是其他。 <ol><li><code>-type f</code>：找到文本类型的数据</li><li><code>-type d</code>：找到文件夹类型的数据</li></ol></li></ol></li><li>用法： <ol><li>根据名称模糊查询：<code>find / -name &#39;*.txt&#39;</code></li><li>根据名称精确查询：<code>find / -name &#39;xiaoshuo.txt&#39;</code></li><li>查询指定文件类型：<code>find / -type f -name &#39;xiaoshuo.txt&#39;</code></li><li>查询指定文件夹类型：<code>find / -type d -name &#39;xiaoshuo.txt&#39;</code></li></ol></li></ol><h2 id="grep-命令" tabindex="-1"><a class="header-anchor" href="#grep-命令"><span>grep 命令</span></a></h2><ol><li>命令说明：直接在文件中搜索出你想要的数据，且高亮显示。不仅能从文件里搜索关键字，只要是文本数据，就可以进行搜索过滤。</li><li>语法：<code>grep &#39;关键字&#39; 文件名</code></li><li>参数： <ol><li><code>【-n】</code>：显示行号</li><li><code>【-i】</code>：忽略大小写</li><li><code>【-l】</code>：数据从哪个文件找出来的</li></ol></li><li>用法： <ol><li>找出‘My’：<code>grep &#39;My&#39; xiaoshuo.txt</code></li><li>找出‘my’，并显示行号：<code>grep -n &#39;my&#39; xiaoshuo.txt</code></li><li>从当前目录下所有文件中搜索：<code>grep &#39;apploe&#39; ./*</code></li><li>利用 grep 找出 nginx 配置文件中定义的网站监听端口号：<code>grep -n -i &#39;listen&#39; /etc/nginx/nginx.conf</code></li></ol></li></ol><h2 id="xargs-参数构造" tabindex="-1"><a class="header-anchor" href="#xargs-参数构造"><span>xargs 参数构造</span></a></h2><ol><li><p>命令说明：又称管道命令，构造参数等，简单说就是把其他命令给它的数据传递给他后面的命令作为参数</p></li><li><p>语法：<code>命令1 | xargs 选项</code>，其中的<strong>选项</strong>用{}代替传递数据</p></li><li><p>实现批量备份：<code>find /tmp/ -name &#39;*.log&#39; | xargs -i cp {} {}.bak</code></p><figure><img src="'+s+'" alt="image-20241215135249179" tabindex="0" loading="lazy"><figcaption>image-20241215135249179</figcaption></figure></li><li><p>实现批量重命名，将文件的 txt 后缀修改为 log：<code>find /tmp/ -name &#39;*.txt&#39; | xargs -i rename txt log {}</code></p></li></ol><h2 id="find-命令的-exec-扩展选项" tabindex="-1"><a class="header-anchor" href="#find-命令的-exec-扩展选项"><span>find 命令的 exec 扩展选项</span></a></h2><ol><li><p>说明：用于 find 命令找出来匹配的文件后，再交给其他的 linux 命令加工。比如：你有一个需求，找出所有的 txt 文件，并且要删除他们。</p></li><li><p>实战</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. 使用 xargs 进行参数构造以及配合管道符二次加工</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">find</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /tmp/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;*.txt&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">xargs</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2.使用 find 命令的 exec 扩展选项</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># -exec 跟着 shell 命令，结尾必须以分号结束，考虑系统差异，加上转义符 \\;</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># {} 作用是替代 find 查找到的结果， {} 前后都有空格</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">find</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /tmp/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;*.txt&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-mtime</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +10</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -exec</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>【-ok】</code> 和 xargs 以及 exec 类似，只是多了一个确认的过程，比如删除文件，会提示让你确认是否删除。</p></li></ol><h2 id="管道符" tabindex="-1"><a class="header-anchor" href="#管道符"><span>管道符 |</span></a></h2><ol><li><p>命令说明：管道是一种通信机制，通常用于进程间的通信，它表现出来的形式将前面每一个进程的输出（stdout）直接作为下一个进程的输入（stdin）。</p><figure><img src="'+a+'" alt="image-20241215131123199" tabindex="0" loading="lazy"><figcaption>image-20241215131123199</figcaption></figure></li><li><p>管道符使用很频繁的场景就是结合 grep 命令对数据进行过滤。</p></li><li><p>利用管道符和 grep 命令来查看系统的用户命令：<code>cat /etc/passwd | grep &#39;alanshelby&#39;</code></p></li><li><p>利用管道符和 grep 命令来查找指定进程：<code>ps -ef | grep tomcat</code></p></li><li><p>检查端口：<code>netstat -tunlp | grep &#39;sshd&#39;</code></p></li><li><p>统计系统中 /var/log 目录下有多少 log 文件：<code>find /var/log -name &#39;*.log&#39; | wc -l</code></p></li><li><p>统计系统用户数量：<code>cat /etc/passwd | wc -l</code></p></li><li><p>管道符与 find 命令结合起来做搜索操作：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 需求：找出系统中所有的txt文件，然后再过滤出其中包含了apple信息的txt有哪些。</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># find / -name &#39;*.txt&#39; # 这个命令查询出来的是每一个txt文件的名字，此时需要使用xargs命令，其中 {} 代表具体文件</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">find</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -type</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> f</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;*.txt&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">xargs</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -l</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;apple&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>',45)]))}]]),n=JSON.parse('{"path":"/Linux/Linux%E5%9F%BA%E7%A1%80/1.2%20Linux%20%E5%91%BD%E4%BB%A4%E9%9B%86%E5%90%88.html","title":"Linux 命令集合","lang":"zh-CN","frontmatter":{"description":"Linux 命令集合 mkdir 命令 命令说明：mkdir 创建目录命令 用法1：mkdir不加参数，路径（需要包含目录名称） 绝对路径创建：mkdir /opt/project 相对路径创建：mkdir ../project/test 用法2：【-p】递归创建 mkdir /opt/project/linux/lsj 用法3：同时创建多个文件夹 m...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/blog/Linux/Linux%E5%9F%BA%E7%A1%80/1.2%20Linux%20%E5%91%BD%E4%BB%A4%E9%9B%86%E5%90%88.html"}],["meta",{"property":"og:site_name","content":"AlanShelby Blog"}],["meta",{"property":"og:title","content":"Linux 命令集合"}],["meta",{"property":"og:description","content":"Linux 命令集合 mkdir 命令 命令说明：mkdir 创建目录命令 用法1：mkdir不加参数，路径（需要包含目录名称） 绝对路径创建：mkdir /opt/project 相对路径创建：mkdir ../project/test 用法2：【-p】递归创建 mkdir /opt/project/linux/lsj 用法3：同时创建多个文件夹 m..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-05T09:31:15.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-05T09:31:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux 命令集合\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-05T09:31:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AlanShelby\\",\\"url\\":\\" https://lsj745929484.github.io/blog/\\"}]}"]]},"headers":[{"level":2,"title":"mkdir 命令","slug":"mkdir-命令","link":"#mkdir-命令","children":[]},{"level":2,"title":"rmdir 命令","slug":"rmdir-命令","link":"#rmdir-命令","children":[]},{"level":2,"title":"touch 命令","slug":"touch-命令","link":"#touch-命令","children":[]},{"level":2,"title":"rm 命令","slug":"rm-命令","link":"#rm-命令","children":[]},{"level":2,"title":"cp 命令","slug":"cp-命令","link":"#cp-命令","children":[]},{"level":2,"title":"mv 命令","slug":"mv-命令","link":"#mv-命令","children":[]},{"level":2,"title":"tar 命令","slug":"tar-命令","link":"#tar-命令","children":[]},{"level":2,"title":"zip 命令","slug":"zip-命令","link":"#zip-命令","children":[]},{"level":2,"title":"unzip 命令","slug":"unzip-命令","link":"#unzip-命令","children":[]},{"level":2,"title":"Cat 命令","slug":"cat-命令","link":"#cat-命令","children":[]},{"level":2,"title":"tac 命令","slug":"tac-命令","link":"#tac-命令","children":[]},{"level":2,"title":"more 命令","slug":"more-命令","link":"#more-命令","children":[]},{"level":2,"title":"less 命令","slug":"less-命令","link":"#less-命令","children":[]},{"level":2,"title":"head 命令","slug":"head-命令","link":"#head-命令","children":[]},{"level":2,"title":"tail 命令","slug":"tail-命令","link":"#tail-命令","children":[]},{"level":2,"title":"wc 命令","slug":"wc-命令","link":"#wc-命令","children":[]},{"level":2,"title":"du 命令","slug":"du-命令","link":"#du-命令","children":[]},{"level":2,"title":"find 命令","slug":"find-命令","link":"#find-命令","children":[]},{"level":2,"title":"grep 命令","slug":"grep-命令","link":"#grep-命令","children":[]},{"level":2,"title":"xargs 参数构造","slug":"xargs-参数构造","link":"#xargs-参数构造","children":[]},{"level":2,"title":"find 命令的 exec 扩展选项","slug":"find-命令的-exec-扩展选项","link":"#find-命令的-exec-扩展选项","children":[]},{"level":2,"title":"管道符 |","slug":"管道符","link":"#管道符","children":[]}],"git":{"createdTime":1738747875000,"updatedTime":1738747875000,"contributors":[{"name":"AlanShelby","username":"AlanShelby","email":"18866545703@163.com","commits":1,"url":"https://github.com/AlanShelby"}]},"readingTime":{"minutes":10.18,"words":3054},"filePathRelative":"Linux/Linux基础/1.2 Linux 命令集合.md","localizedDate":"2025年2月5日","autoDesc":true}')}}]);