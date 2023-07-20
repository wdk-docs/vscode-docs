import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "满足智能感知。",
    Svg: require("@site/static/img/home-intellisense.svg").default,
    description: (
      <>除了语法高亮显示和自动补全之外，还可以使用IntelliSense，它提供基于变量类型、函数定义和导入模块的智能补全。</>
    ),
  },
  {
    title: "打印语句调试是过去的事情",
    Svg: require("@site/static/img/home-debug.svg").default,
    description: (
      <>直接从编辑器调试代码。启动或附加到正在运行的应用程序，并使用断点、调用堆栈和交互式控制台进行调试。 </>
    ),
  },
  {
    title: "内置Git命令",
    Svg: require("@site/static/img/home-git.svg").default,
    description: (
      <>使用Git和其他SCM提供商从未如此简单。从编辑器中查看差异、阶段文件并进行提交。从任何托管的SCM服务中推送和拉取。</>
    ),
  },
  {
    title: "可扩展和可定制",
    Svg: require("@site/static/img/Hundreds-of-Extensions.svg").default,
    description: (
      <>
        想要更多的功能?安装扩展以添加新的语言、主题、调试器，并连接到其他服务。扩展在单独的进程中运行，确保它们不会减慢编辑器的速度。了解有关扩展的更多信息。
      </>
    ),
  },
  {
    title: "轻松自信地部署",
    Svg: require("@site/static/img/home-azure.svg").default,
    description: (
      <>
        使用Microsoft Azure，您可以部署和托管React, Angular, Vue, Node,
        Python(以及更多!)站点，存储和查询关系和基于文档的数据，并使用无服务器计算进行扩展，这一切都很容易，所有这些都来自VS
        Code。
      </>
    ),
  },
  // {
  //   title: '',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //     </>
  //   ),
  // },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
