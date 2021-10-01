(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{98:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return m})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return p}));var a,r=t(3),o=t(7),i=(t(0),t(107)),s=t(39),c=["components"],l={id:"customize-sources-and-sinks",title:"Customize Sources and Sinks",sidebar_label:"Customize Sources and Sinks"},m={unversionedId:"customize-sources-and-sinks",id:"customize-sources-and-sinks",isDocsHomePage:!1,title:"Customize Sources and Sinks",description:"Overview",source:"@site/documentation/customize_sources_and_sinks.md",slug:"/customize-sources-and-sinks",permalink:"/docs/customize-sources-and-sinks",editUrl:"https://github.com/facebook/mariana-trench/tree/main/documentation/website/documentation/customize_sources_and_sinks.md",version:"current",sidebar_label:"Customize Sources and Sinks",sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Models",permalink:"/docs/models"}},d=[{value:"Overview",id:"overview",children:[]}],u=(a="FbCustomizeSourcesAndSinks",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),b={toc:d};function p(e){var n=e.components,t=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"Under the context of Mariana Trench, we talk about sources and sinks in terms of methods. For example, we may say that the return value of a method is a source (or a sink). We may also say that the 2nd parameter of a method is a source (or a sink). Such description of a method is called a ",Object(i.b)("strong",{parentName:"p"},'"model"'),". See ",Object(i.b)("a",{parentName:"p",href:"/docs/models"},"Models")," for more details about models and writing them."),Object(i.b)(s.FbInternalOnly,{mdxType:"FbInternalOnly"}," ",Object(i.b)(u,{mdxType:"FbCustomizeSourcesAndSinks"})," "),Object(i.b)(s.OssOnly,{mdxType:"OssOnly"},Object(i.b)("p",null,"To define sources or sinks that are not contained in the default set of ",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebook/mariana-trench/tree/main/configuration/model-generators/sources"},"sources")," and ",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebook/mariana-trench/tree/main/configuration/model-generators/sinks"},"sinks"),", a user needs to:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Write one or more JSON files that respect our ",Object(i.b)("a",{parentName:"li",href:"/docs/models"},"model generator Domain Specific Language (DSL)"),", which express how to generate models from methods and are hence called  ",Object(i.b)("strong",{parentName:"li"},'"model generators"'),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"For example, a model generator may say that, for all methods (that will be analyzed by Mariana Trench) whose name is ",Object(i.b)("inlineCode",{parentName:"li"},"onActivityResult"),", specify their 2nd parameter as a source.")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},'{\n"model_generators": [\n    {\n    "find": "methods",\n    "where": [\n        {\n        "constraint": "name",\n        "pattern": "onActivityResult"\n        },\n    ],\n    "model": {\n        "sources": [\n        {\n            "kind": "TestSensitiveUserInput",\n            "port": "Argument(2)"\n        }\n        ]\n    }\n    }\n}\n'))),Object(i.b)("li",{parentName:"ol"},"Instruct Mariana Trench to read from your model generator, so that Mariana Trench will generate models at runtime.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Intuitively, the models generated by interpreting model generators express sources and sinks of each method ",Object(i.b)("strong",{parentName:"li"},"before")," running Mariana Trench. Based on such models, Mariana Trench will automatically infer ",Object(i.b)("strong",{parentName:"li"},"new")," models for each method at runtime."),Object(i.b)("li",{parentName:"ul"},"To instruct Mariana Trench to read from customized JSON model generators, add your json model generator ",Object(i.b)("a",{parentName:"li",href:"https://github.com/facebook/mariana-trench/tree/main/configuration/model-generators"},"here"),"."),Object(i.b)("li",{parentName:"ul"},"Add the model generator name (i.e, the file name) in the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/facebook/mariana-trench/blob/main/configuration/default_generator_config.json"},"JSON configuration file"),"."))),Object(i.b)("li",{parentName:"ol"},"Update ",Object(i.b)("strong",{parentName:"li"},'"rules"')," if necessary.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Background: Mariana Trench categorizes sources and sinks into different ",Object(i.b)("strong",{parentName:"li"},'"kinds"'),", which are string-typed. For example, a source may have a kind of",Object(i.b)("inlineCode",{parentName:"li"},"JavascriptInterfaceUserInput"),". A sink may have a kind of ",Object(i.b)("inlineCode",{parentName:"li"},"Logging"),". Mariana Trench only finds data flow ",Object(i.b)("strong",{parentName:"li"},"from sources of a particular kind to sinks of another paritcular kind"),", which are called ",Object(i.b)("strong",{parentName:"li"},'"rules"'),"."),Object(i.b)("li",{parentName:"ul"},"To specify kinds that are not mentioned in the default set of rules or to specify rules that are different than the default rules, you need to specify a new rule in file ",Object(i.b)("a",{parentName:"li",href:"https://github.com/facebook/mariana-trench/blob/main/configuration/rules.json"},Object(i.b)("inlineCode",{parentName:"a"},"rules.json")),", in order to instruct Mariana Trench to find data flow that matches the new rule."),Object(i.b)("li",{parentName:"ul"},"For example, to catch flows from ",Object(i.b)("inlineCode",{parentName:"li"},"TestSensitiveUserInput")," in the example above and the sink kind ",Object(i.b)("inlineCode",{parentName:"li"},"Logging"),", you can add the following rule to the default ",Object(i.b)("a",{parentName:"li",href:"https://github.com/facebook/mariana-trench/blob/main/configuration/rules.json"},Object(i.b)("inlineCode",{parentName:"a"},"rules.json")),":")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},'{\n"name": "TestRule",\n"code": 18,\n"description": "A test rule",\n"sources": [\n    "TestSensitiveUserInput"\n],\n"sinks": [\n    "Logging"\n]\n}\n'))))))}p.isMDXComponent=!0}}]);