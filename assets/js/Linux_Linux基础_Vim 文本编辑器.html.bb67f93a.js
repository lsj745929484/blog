"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[922],{6262:(i,l)=>{l.A=(i,l)=>{const e=i.__vccOpts||i;for(const[i,o]of l)e[i]=o;return e}},1:(i,l,e)=>{e.r(l),e.d(l,{comp:()=>s,data:()=>m});var o=e(641);const a=e.p+"assets/img/image-20241207172523937.a207f1c1.png",t=e.p+"assets/img/image-20241209113511333.0fef6e34.png",c=e.p+"assets/img/image-20241209180030195.0fce09d6.png",d=e.p+"assets/img/image-20241210164532764.735a7cd2.png",n={},s=(0,e(6262).A)(n,[["render",function(i,l){return(0,o.uX)(),(0,o.CE)("div",null,l[0]||(l[0]=[(0,o.Fv)('<h1 id="vim-文本编辑器" tabindex="-1"><a class="header-anchor" href="#vim-文本编辑器"><span>Vim 文本编辑器</span></a></h1><h2 id="图解-vim-流程" tabindex="-1"><a class="header-anchor" href="#图解-vim-流程"><span>图解 Vim 流程</span></a></h2><figure><img src="'+a+'" alt="image-20241207172523937" tabindex="0" loading="lazy"><figcaption>image-20241207172523937</figcaption></figure><figure><img src="'+t+'" alt="image-20241209113511333" tabindex="0" loading="lazy"><figcaption>image-20241209113511333</figcaption></figure><h2 id="vim-三种模式" tabindex="-1"><a class="header-anchor" href="#vim-三种模式"><span>Vim 三种模式</span></a></h2><ol><li>命令模式（Command mode） <ol><li>最常用的，按下字母 a,i,o（a 在光标后开始编辑；i 是在光标处开始编辑；o 是在光标下一行开始编辑。）</li></ol></li><li>输入模式（Insert mode） <ol><li>可对文件内容进行编辑。</li><li>退出编辑模式按下 ESC 键，回到命令模式。</li></ol></li><li>末行模式（Last line mode） <ol><li>从命令模式下，输入冒号，即进入末行模式。</li><li>进行一些特殊操作，比如文本信息的查找、替换、保存、退出等。</li></ol></li></ol><h2 id="命令模式" tabindex="-1"><a class="header-anchor" href="#命令模式"><span>命令模式</span></a></h2><ol><li>Vim 打开文件，复制粘贴数据是需要注意： <ol><li>仅仅复制粘贴的是中文英文语句还好，可以直接粘贴</li><li>如果是代码，有固定格式的文本比如 yaml、xml、py、html 等，就得进入 Vim 的粘贴模式，方可保持正确的格式。</li></ol></li><li>Vim 打开文件显示行号：<code>:set nu</code> ，取消行号：<code>:set nonu</code></li><li>行首、行尾 <ol><li><code>gg</code>：移动光标到问文档的首行</li><li><code>G</code>：移动光标到文档的尾行【按下 shift + g】</li></ol></li><li>定位到指定行：工作里经常会遇见代码部署出现错误信息，且程序会自动告诉你大约哪一行，可以根据提示的行数，按下<code>行号 + G</code> 即可快速跳转，或者使用<code>:行号</code> 也可以。</li><li>复制、粘贴、撤销、恢复 <ol><li><code>yy</code>：复制单行</li><li><code>3yy</code>：<strong>数字</strong>+yy表示复制光标所在行向下的<strong>数字</strong>行（包含光标所在行）</li><li><code>p</code>：在光标处，下行打印；<code>P</code>：在光标上一行打印</li></ol></li><li>剪切、删除 <ol><li>作用：剪切后可以选择是否粘贴，如果不粘贴就相当于删除操作</li><li><code>dd</code>：剪切光标所在的当前行</li><li><code>数字 + dd</code>：剪切指定的行，包括当前行，比如光标在第2行，输入<code>5dd</code>，会将第2-5行的内容剪切</li><li><code>D</code>：删除当前行、光标处、以及后续内容</li><li><code>dG</code>：删除光标所在的当前行到文档末尾的所有内容</li><li><code>x</code>：删除光标所在字符</li></ol></li><li>撤销、恢复 <ol><li>撤销：按下<code>u</code>，即可撤销上一步的动作</li><li>恢复：按下<code>ctrl + r</code>可以恢复撤销的内容</li></ol></li></ol><h2 id="末行模式" tabindex="-1"><a class="header-anchor" href="#末行模式"><span>末行模式</span></a></h2><ol><li>进入末行模式 <ol><li>用 Vim，在命令模式下，你要退出编辑模式</li><li>按下 ESC 回到命令模式</li><li>在命令模式下，输入英文冒号，进入末行模式</li></ol></li><li>写入数据 write <ol><li>用 Vim 编辑器写入文件内容</li><li><code>:w</code> 末行模式下的 write 模式，写入文件数据</li></ol></li><li>退出 quit <ol><li><code>:q</code>末行模式下直接退出</li></ol></li><li>保存并且退出 <ol><li><code>:wq</code> 末行模式下保存并退出</li></ol></li><li>强制，感叹号 <ol><li><code>:q!</code> 末行模式下强制性不写入文件内容退出 Vim</li></ol></li></ol><h2 id="搜索、查找、替换" tabindex="-1"><a class="header-anchor" href="#搜索、查找、替换"><span>搜索、查找、替换</span></a></h2><ol><li>搜索、查找 <ol><li>查找你想要的内容，可以直接在 Vim 的命令模式下，输入 <code>/</code> ，后面跟上你要查找的内容关键字</li><li>例如：命令模式下，输入：<code>/悟空</code> ，搜索到的内容会高亮显示，按<code>n</code>键可以向下搜索</li><li>取消搜索后的高亮关键词：在 Vim 的命令模式下，输入<code>:noh</code></li></ol></li><li>替换 <ol><li>单行替换（推荐），只替换一次：<code>:s/原内容/新内容/</code></li><li>单行替换（推荐），替换N次：<code>:s/原内容/新内容/g</code></li><li>全篇替换（慎重），全文替换，逐行匹配，找到第一个关键字，只替换一次：<code>:%s/原内容/新内容/</code></li><li>全篇替换（慎重），全文替换：<code>:%s/原内容/新内容/g</code></li></ol></li></ol><h2 id="粘贴模式" tabindex="-1"><a class="header-anchor" href="#粘贴模式"><span>粘贴模式</span></a></h2><ol><li>使用场景：日常工作中，我们会频繁的复制粘贴各种配置，并且大多数配置文件都是有缩进格式的，此时就需要使用该模式。</li><li>在末行模式下，输入<code>:set paste</code> 进入粘贴模式，此时再进入编辑模式，粘贴带有格式的文本，就不会出现格式错乱的问题了。 <ol><li><code>:set paste</code> 进入粘贴模式</li><li><code>:set nopaste</code> 取消粘贴模式</li></ol></li></ol><h2 id="可视化选择模式" tabindex="-1"><a class="header-anchor" href="#可视化选择模式"><span>可视化选择模式</span></a></h2><figure><img src="'+c+'" alt="image-20241209180030195" tabindex="0" loading="lazy"><figcaption>image-20241209180030195</figcaption></figure><p>如上图所示，如果需要将红框中所有的”旺财“全部修改，则需要使用 Vim 编辑器的可视化选择模式，进入可视化选择模式后，是<strong>列选择模式</strong>。</p><ol><li>可视化选择模式如何使用： <ol><li>先确定好你的光标位置，如上图光标放到”旺财“的【旺】字上</li><li>按下<code>ctrl + v</code>进入可视化选择模式</li><li>此时可以使用方向键，上下左右选择区域</li><li>选择后进入编辑模式，去修改多行文本，输入大写字母<code>I</code>，进入批量编辑模式，修改对应的文本后，按两下<code>ESC</code>键完成批量修改</li></ol></li></ol><h2 id="故障处理" tabindex="-1"><a class="header-anchor" href="#故障处理"><span>故障处理</span></a></h2><p>当用 Vim 编辑器，会遇见这样一个错误页面，这个错误很常见：</p><figure><img src="'+d+'" alt="image-20241210164532764" tabindex="0" loading="lazy"><figcaption>image-20241210164532764</figcaption></figure><blockquote><p>出现 swp 文件的原因：</p></blockquote><ol><li>多个人同时编辑了一个文件</li><li>编辑文件时，没有正常保存退出</li></ol><blockquote><p>为什么会出现 swp 文件呢？</p></blockquote><ol><li>由于多人同时编辑一个文件，系统不知道应该保存谁的，为了保护文件数据，才会产生 swp 文件。</li></ol><blockquote><p>出现 swp 文件后如何解决呢？</p></blockquote><ol><li>不要未保存的数据：直接删除这个 swp 文件即可</li><li>要未保存的数据： <ol><li>继续打开文件：<code>vim test.html</code></li><li>发现 swp 错误提示：输入<code>R</code>，recover 恢复</li><li>继续编辑，然后正常保存退出<code>:wq</code></li><li>删除 swp 文件即可</li></ol></li></ol>',27)]))}]]),m=JSON.parse('{"path":"/Linux/Linux%E5%9F%BA%E7%A1%80/Vim%20%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91%E5%99%A8.html","title":"Vim 文本编辑器","lang":"zh-CN","frontmatter":{"description":"Vim 文本编辑器 图解 Vim 流程 image-20241207172523937image-20241207172523937 image-20241209113511333image-20241209113511333 Vim 三种模式 命令模式（Command mode） 最常用的，按下字母 a,i,o（a 在光标后开始编辑；i 是在光标处开...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/blog/Linux/Linux%E5%9F%BA%E7%A1%80/Vim%20%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"AlanShelby Blog"}],["meta",{"property":"og:title","content":"Vim 文本编辑器"}],["meta",{"property":"og:description","content":"Vim 文本编辑器 图解 Vim 流程 image-20241207172523937image-20241207172523937 image-20241209113511333image-20241209113511333 Vim 三种模式 命令模式（Command mode） 最常用的，按下字母 a,i,o（a 在光标后开始编辑；i 是在光标处开..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-05T10:02:17.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-05T10:02:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vim 文本编辑器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-05T10:02:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AlanShelby\\",\\"url\\":\\" https://lsj745929484.github.io/blog/\\"}]}"]]},"headers":[{"level":2,"title":"图解 Vim 流程","slug":"图解-vim-流程","link":"#图解-vim-流程","children":[]},{"level":2,"title":"Vim 三种模式","slug":"vim-三种模式","link":"#vim-三种模式","children":[]},{"level":2,"title":"命令模式","slug":"命令模式","link":"#命令模式","children":[]},{"level":2,"title":"末行模式","slug":"末行模式","link":"#末行模式","children":[]},{"level":2,"title":"搜索、查找、替换","slug":"搜索、查找、替换","link":"#搜索、查找、替换","children":[]},{"level":2,"title":"粘贴模式","slug":"粘贴模式","link":"#粘贴模式","children":[]},{"level":2,"title":"可视化选择模式","slug":"可视化选择模式","link":"#可视化选择模式","children":[]},{"level":2,"title":"故障处理","slug":"故障处理","link":"#故障处理","children":[]}],"git":{"createdTime":1738747875000,"updatedTime":1738749737000,"contributors":[{"name":"AlanShelby","username":"AlanShelby","email":"18866545703@163.com","commits":2,"url":"https://github.com/AlanShelby"}]},"readingTime":{"minutes":4.85,"words":1455},"filePathRelative":"Linux/Linux基础/Vim 文本编辑器.md","localizedDate":"2025年2月5日","autoDesc":true}')}}]);