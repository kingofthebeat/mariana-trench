(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{88:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return d})),t.d(a,"toc",(function(){return b})),t.d(a,"default",(function(){return p}));var n,r=t(3),o=t(7),i=(t(0),t(107)),s=t(39),c=["components"],l={id:"overview",title:"Overview",sidebar_label:"Overview"},d={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Overview",description:"What is Mariana Trench",source:"@site/documentation/overview.md",slug:"/overview",permalink:"/docs/overview",editUrl:"https://github.com/facebook/mariana-trench/tree/main/documentation/website/documentation/overview.md",version:"current",sidebar_label:"Overview",sidebar:"someSidebar",next:{title:"Getting Started",permalink:"/docs/getting-started"}},b=[{value:"What is Mariana Trench",id:"what-is-mariana-trench",children:[]},{value:"Background",id:"background",children:[{value:"Sources and Sinks",id:"sources-and-sinks",children:[]},{value:"What does Mariana Trench do?",id:"what-does-mariana-trench-do",children:[]}]},{value:"Usage",id:"usage",children:[]},{value:"References",id:"references",children:[]}],u=(n="FbOverview",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),h={toc:b};function p(e){var a=e.components,t=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},h,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-is-mariana-trench"},"What is Mariana Trench"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Mariana Trench")," is a security focused static analysis platform targeting Android. The tool provides an extensible global taint analysis similar to pre-existing tools like ",Object(i.b)("a",{parentName:"p",href:"https://pyre-check.org/docs/pysa-basics"},"Pysa")," for Python. The tool leverages existing static analysis infrastructure (e.g, ",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebookincubator/SPARTA"},"SPARTA"),") built on top of ",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebook/redex"},"Redex"),"."),Object(i.b)("p",null,"By default Mariana Trench analyzes ",Object(i.b)("a",{parentName:"p",href:"https://source.android.com/devices/tech/dalvik/dalvik-bytecode"},"dalvik bytecode")," and can work with or without access to the source code."),Object(i.b)("h2",{id:"background"},"Background"),Object(i.b)("h3",{id:"sources-and-sinks"},"Sources and Sinks"),Object(i.b)("p",null,"Under the context of taint analysis ","[1]",', "sources" usually mean sensitive data that originates from users. For example, sources can be users\' passwords or locations. "Sinks" usually mean functions or methods that use data that "flows" from sources, where the term "flow" is generally defined under the context of "information flow" ',"[2]","."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"An operation, or series of operations, that uses the value of some object, say x, to derive a value for another, say y, causes a flow from x to y")),Object(i.b)("p",null,"As an example, sinks can be a logging API that writes data into a log file."),Object(i.b)("h3",{id:"what-does-mariana-trench-do"},"What does Mariana Trench do?"),Object(i.b)("p",null,"A flow from sources to sinks indicate that for example user passwords may get logged into a file, which is not desirable and is called as an ",Object(i.b)("strong",{parentName:"p"},'"issue"')," under the context of Mariana Trench. Mariana Trench is designed to automatically discover such issues."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"The usage of Mariana Trench can be summarized in three steps:"),Object(i.b)(s.OssOnly,{mdxType:"OssOnly"},Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},'Specify customized "sources" and "sinks". (See ',Object(i.b)("a",{parentName:"li",href:"/docs/customize_sources_and_sinks"},"Customize Sources and Sinks"),")"),Object(i.b)("li",{parentName:"ol"},"Run Mariana Trench on an arbitrary Java repository (with the sources and sinks specified in Step 1), whether it be a repository for an Android application project or for a vanilla (or plain old) Java project."),Object(i.b)("li",{parentName:"ol"},"View the analysis results from a web browser. (For steps 2 and 3 see ",Object(i.b)("a",{parentName:"li",href:"/docs/getting-started"},"Getting Started"),")"))),Object(i.b)(s.FbInternalOnly,{mdxType:"FbInternalOnly"}," ",Object(i.b)(u,{mdxType:"FbOverview"})," "),Object(i.b)("h2",{id:"references"},"References"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://dl.acm.org/doi/10.1145/1542476.1542486"},'Tripp, Omer, et al. "TAJ: effective taint analysis of web applications." ACM Sigplan Notices 44.6 (2009): 87-97.')),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://dl.acm.org/doi/10.1145/359636.359712"},'Denning, Dorothy E., and Peter J. Denning. "Certification of programs for secure information flow." Communications of the ACM 20.7 (1977): 504-513.'))))}p.isMDXComponent=!0}}]);