import React from "react";
import { connect } from "react-redux";
import {
  SDivider,
  MyProjects,
  ProjectsContainer,
  SingleProject,
  ThreeProjects,
  Overlay,
  OverlayBlur,
  OverlayTitle,
  OverlayDesc,
  OverlaySNS,
  OverlayTurn,
  BtnContainer,
  OpenSaveBtn,
} from "./projectsStyles";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export const ProjectsPage = (props) => {
  return (
    <ProjectsContainer>
      <MyProjects>My Projects</MyProjects>
      <ThreeProjects>
        <SingleProject>
          <img src="https://i.ibb.co/qFY7ZJ4/pokebay.png" alt="PokeBay logo" />
          <Overlay>
            <OverlayTitle>Pokebay</OverlayTitle>
            <OverlayDesc>
              An e-commerce website for people interested in stocking up with
              some pokemons!
            </OverlayDesc>
            <OverlaySNS>
              {PokeLinksArray.map(({ icon, label, to }) => (
                <a
                  href={to}
                  key={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgb(45,45,45)" }}
                >
                  {icon}
                </a>
              ))}
            </OverlaySNS>
          </Overlay>
        </SingleProject>
        <SingleProject>
          <img
            src="https://camo.githubusercontent.com/628d0f1739c8349443a672faa432e212e8e11b51f2f1eca5f4f0272c234497ad/68747470733a2f2f65787465726e616c2d636f6e74656e742e6475636b6475636b676f2e636f6d2f69752f3f753d6874747073253341253246253246666f746f626c6f672e6a616b7562612e637a25324677702d636f6e74656e7425324675706c6f6164732532464a5f6c6f676f2e706e6726663d31266e6f66623d31"
            alt="Jukathon logo"
          />
          <OverlayBlur>
            <OverlayTitle>Jukathon</OverlayTitle>
            <OverlayDesc>
              It loads all sounds from user's device and lets play audio of
              their liking!
            </OverlayDesc>
            <OverlaySNS>
              {JukaLinksArray.map(({ icon, label, to }) => (
                <a
                  href={to}
                  key={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgb(45,45,45)" }}
                >
                  {icon}
                </a>
              ))}
            </OverlaySNS>
          </OverlayBlur>
        </SingleProject>
        <SingleProject>
          <img
            src="https://i.ibb.co/ynrHsRg/hiitcoin.png"
            alt="hiitcoin logo"
          />
          <OverlayTurn>
            <OverlayTitle>HIITCoin</OverlayTitle>
            <OverlayDesc>
              A minimal mobile app that lets design and perform workouts!
            </OverlayDesc>
            <OverlaySNS>
              {HiiTLinksArray.map(({ icon, label, to }) => (
                <a
                  href={to}
                  key={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgb(45,45,45)" }}
                >
                  {icon}
                </a>
              ))}
            </OverlaySNS>
          </OverlayTurn>
        </SingleProject>
      </ThreeProjects>
      <SDivider />
      <MyProjects>My Resume</MyProjects>
      <BtnContainer>
        <a href="Resume.pdf" target="_blank">
          <OpenSaveBtn>
            <span>Open in New Tab</span>
          </OpenSaveBtn>
        </a>
        <a
          href="Resume.pdf"
          target="_blank"
          download="Resume - Andrey Statkevskiy"
        >
          <OpenSaveBtn>
            <span>Download</span>
          </OpenSaveBtn>
        </a>
      </BtnContainer>
      <div id="chartdiv"></div>
    </ProjectsContainer>
  );
};

am4core.useTheme(am4themes_animated);

let chart = am4core.create("chartdiv", am4plugins_timeline.SerpentineChart);
chart.curveContainer.padding(50, 20, 50, 20);
chart.levelCount = 4;
chart.yAxisRadius = am4core.percent(25);
chart.yAxisInnerRadius = am4core.percent(-25);
chart.maskBullets = false;

let colorSet = new am4core.ColorSet();
colorSet.saturation = 0.5;

chart.data = [
  {
    category: "Module #1",
    start: "2019-01-10",
    end: "2019-01-13",
    color: colorSet.getIndex(0),
    task: "Gathering requirements",
  },
  {
    category: "Module #1",
    start: "2019-02-05",
    end: "2019-04-18",
    color: colorSet.getIndex(0),
    task: "Development",
  },
  {
    category: "Module #2",
    start: "2019-01-08",
    end: "2019-01-10",
    color: colorSet.getIndex(5),
    task: "Gathering requirements",
  },
  {
    category: "Module #2",
    start: "2019-01-12",
    end: "2019-01-15",
    color: colorSet.getIndex(5),
    task: "Producing specifications",
  },
  {
    category: "Module #2",
    start: "2019-01-16",
    end: "2019-02-05",
    color: colorSet.getIndex(5),
    task: "Development",
  },
  {
    category: "Module #2",
    start: "2019-02-10",
    end: "2019-02-18",
    color: colorSet.getIndex(5),
    task: "Testing and QA",
  },
  {
    category: "",
  },
  {
    category: "Module #3",
    start: "2019-01-01",
    end: "2019-01-19",
    color: colorSet.getIndex(9),
    task: "Gathering requirements",
  },
  {
    category: "Module #3",
    start: "2019-02-01",
    end: "2019-02-10",
    color: colorSet.getIndex(9),
    task: "Producing specifications",
  },
  {
    category: "Module #3",
    start: "2019-03-10",
    end: "2019-04-15",
    color: colorSet.getIndex(9),
    task: "Development",
  },
  {
    category: "Module #3",
    start: "2019-04-20",
    end: "2019-04-30",
    color: colorSet.getIndex(9),
    task: "Testing and QA",
    disabled2: false,
    image2: "logo.png",
    location: 0,
  },
  {
    category: "Module #4",
    start: "2019-01-15",
    end: "2019-02-12",
    color: colorSet.getIndex(15),
    task: "Gathering requirements",
    disabled1: false,
    image1: "logo.png",
  },
  {
    category: "Module #4",
    start: "2019-02-25",
    end: "2019-03-10",
    color: colorSet.getIndex(15),
    task: "Development",
  },
  {
    category: "Module #4",
    start: "2019-03-23",
    end: "2019-04-29",
    color: colorSet.getIndex(15),
    task: "Testing and QA",
  },
];

chart.dateFormatter.dateFormat = "yyyy-MM-dd";
chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
chart.fontSize = 11;

let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.labels.template.paddingRight = 25;
categoryAxis.renderer.minGridDistance = 10;
categoryAxis.renderer.innerRadius = -60;
categoryAxis.renderer.radius = 60;

let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.minGridDistance = 70;
dateAxis.baseInterval = { count: 1, timeUnit: "day" };
dateAxis.renderer.tooltipLocation = 0;
dateAxis.startLocation = -0.5;
dateAxis.renderer.line.strokeDasharray = "1,4";
dateAxis.renderer.line.strokeOpacity = 0.6;
dateAxis.tooltip.background.fillOpacity = 0.2;
dateAxis.tooltip.background.cornerRadius = 5;
dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor(
  "alternativeBackground"
);
dateAxis.tooltip.label.paddingTop = 7;

let labelTemplate = dateAxis.renderer.labels.template;
labelTemplate.verticalCenter = "middle";
labelTemplate.fillOpacity = 0.7;
labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor(
  "background"
);
labelTemplate.background.fillOpacity = 1;
labelTemplate.padding(7, 7, 7, 7);

let series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
series.columns.template.height = am4core.percent(20);
series.columns.template.tooltipText =
  "{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]";

series.dataFields.openDateX = "start";
series.dataFields.dateX = "end";
series.dataFields.categoryY = "category";
series.columns.template.propertyFields.fill = "color"; // get color from data
series.columns.template.propertyFields.stroke = "color";
series.columns.template.strokeOpacity = 0;

let bullet = series.bullets.push(new am4charts.CircleBullet());
bullet.circle.radius = 3;
bullet.circle.strokeOpacity = 0;
bullet.propertyFields.fill = "color";
bullet.locationX = 0;

let bullet2 = series.bullets.push(new am4charts.CircleBullet());
bullet2.circle.radius = 3;
bullet2.circle.strokeOpacity = 0;
bullet2.propertyFields.fill = "color";
bullet2.locationX = 1;

let imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
imageBullet1.disabled = true;
imageBullet1.propertyFields.disabled = "disabled1";
imageBullet1.locationX = 1;
imageBullet1.circle.radius = 20;
imageBullet1.propertyFields.stroke = "color";
imageBullet1.background.propertyFields.fill = "color";
imageBullet1.image = new am4core.Image();
imageBullet1.image.propertyFields.href = "image1";

let imageBullet2 = series.bullets.push(new am4plugins_bullets.PinBullet());
imageBullet2.disabled = true;
imageBullet2.propertyFields.disabled = "disabled2";
imageBullet2.locationX = 0;
imageBullet2.circle.radius = 20;
imageBullet2.propertyFields.stroke = "color";
imageBullet2.background.propertyFields.fill = "color";
imageBullet2.image = new am4core.Image();
imageBullet2.image.propertyFields.href = "image2";

let eventSeries = chart.series.push(new am4plugins_timeline.CurveLineSeries());
eventSeries.dataFields.dateX = "eventDate";
eventSeries.dataFields.categoryY = "category";
eventSeries.data = [
  {
    category: "",
    eventDate: "2019-01-15",
    letter: "A",
    description: "Something happened here",
  },
  {
    category: "",
    eventDate: "2019-01-23",
    letter: "B",
    description: "Something happened here",
  },
  {
    category: "",
    eventDate: "2019-02-10",
    letter: "C",
    description: "Something happened here",
  },
  {
    category: "",
    eventDate: "2019-02-29",
    letter: "D",
    description: "Something happened here",
  },
  {
    category: "",
    eventDate: "2019-03-06",
    letter: "E",
    description: "Something happened here",
  },
  {
    category: "",
    eventDate: "2019-03-12",
    letter: "F",
    description: "Something happened here",
  },
  {
    category: "",
    eventDate: "2019-03-22",
    letter: "G",
    description: "Something happened here",
  },
];
eventSeries.strokeOpacity = 0;

let flagBullet = eventSeries.bullets.push(new am4plugins_bullets.FlagBullet());
flagBullet.label.propertyFields.text = "letter";
flagBullet.locationX = 0;
flagBullet.tooltipText = "{description}";

chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.align = "center";
chart.scrollbarX.width = am4core.percent(85);

let cursor = new am4plugins_timeline.CurveCursor();
chart.cursor = cursor;
cursor.xAxis = dateAxis;
cursor.yAxis = categoryAxis;
cursor.lineY.disabled = true;
cursor.lineX.strokeDasharray = "1,4";
cursor.lineX.strokeOpacity = 1;

dateAxis.renderer.tooltipLocation2 = 0;
categoryAxis.cursorTooltipEnabled = false;

const PokeLinksArray = [
  {
    label: "GitHub",
    icon: <AiFillGithub />,
    to: "https://github.com/Bisque-gs/graceshopper-project",
  },
  {
    label: "Website",
    icon: <AiOutlineLink />,
    to: "https://grace-pokebay.herokuapp.com/",
  },
];

const JukaLinksArray = [
  {
    label: "GitHub",
    icon: <AiFillGithub />,
    to: "https://github.com/AndStatik/Jukathon",
  },
];

const HiiTLinksArray = [
  {
    label: "GitHub",
    icon: <AiFillGithub />,
    to: "https://github.com/HIITCoin/HiiTCoin",
  },
  {
    label: "Website",
    icon: <AiOutlineLink />,
    to: "https://hiitcoin.netlify.app/",
  },
];

const mapState = (state) => {
  return {};
};

export default connect(mapState)(ProjectsPage);
