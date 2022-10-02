const CRYPTMAP = {
	'#': '0', '$': '1', '%': '2', '&': '3', '\'': '4',
	'(': '5', ')': '6', '*': '7', '+': '8', ',': '9',
	'-': '10','.': '11','/': '12','0': '13','1': '14',
	'2': '15','3': '16','4': '17','5': '18','6': '19',
  '7': '20','8': '21','9': '22','A': '23','B': '24',
  'C': '25','D': '26','E': '27','F': '28','G': '29',
  'H': '30','I': '31','J': '32','K': '33','L': '34',
  'M': '35','N': '36','O': '37','P': '38','Q': '39',
  'R': '40','S': '41','T': '42','U': '43','V': '44',
  'W': '45','X': '46','Y': '47','Z': '48',
}

const FRAMES = {
  '0': {
    '0':"Action Bar 1",
    '1':"Action Bar 2",
    '2':"Action Bar 3",
    '3':"Action Bar 4",
    '4':"Action Bar 5",
    '10':"Stance Bar",
    '11':"Pet Bar",
    '12':"Posess Bar",
  },
  '1': {
    '-1':"Castbar",
  },
  '2': {
    '-1':"Minimap",
  },
  '3': {
    '0':"Player Frame",
    '1':"Target Frame",
    '2':"Focus Frame",
    '3':"Party Frames",
    '4':"Raid Frames",
    '5':"Boss Frames",
    '6':"Arena Frames",
  },
  '4': {
    '-1':"Encounter Bar",
  },
  '5': {
    '-1':"Extra Abilities",
  },
  '6': {
    '0':"Buffs",
    '1':"Debuffs",
  },
  '7': {
    '-1':"Talking Head",
  },
  '8': {
    '-1':"Chat Box",
  },
  '9': {
    '-1':"Exit Vehicle Button",
  },
  '10': {
    '-1':"Loot Window",
  },
  '11': {
    '-1':"HUD Tooltip",
  }
}

const ANCHORS = {
  "TOPLEFT": "top left",
  "TOPCENTER": "top center",
  "TOPRIGHT": "top right",
  "LEFT":"left",
  "CENTER":"center",
  "RIGHT":"right",
  "BOTTOMLEFT":"bottom left",
  "BOTTOMCENTER":"bottom center",
  "BOTTOMRIGHT":"bottom right"
}

const POINTS = 
{
	'0':"TOPLEFT",
	'1':"TOPCENTER",
	'2':"TOPRIGHT",
	'3':"LEFT",
	'4':"CENTER",
	'5':"RIGHT",
	'6':"BOTTOMLEFT",
	'7':"BOTTOMCENTER",
	'8':"BOTTOMRIGHT",
}




function swap(json){
  var ret = {};
  for(var key in json){
    ret[json[key]] = key;
  }
  return ret;
}

const REVCRYPTMAP = swap(CRYPTMAP);
const REVPOINTS = swap(POINTS);
const fromString = (input)=>{
  let inputArr = input.split(' ');
  let globalConfig = inputArr.slice(0, 2);

  let pieceCount = globalConfig[0];
  let sectionCount = globalConfig[1];

  let sections = []
  for (let i = 0; i < sectionCount; i++) {
    let sectionArr = inputArr.slice(2+(i*9), 2+((i+1)*9));

    let framegroup = sectionArr[0];
    let frameid = sectionArr[1];
    let frame = FRAMES[framegroup.toString()][frameid.toString()]
    let point = POINTS[sectionArr[2].toString()];
    let relativepoint = POINTS[sectionArr[3].toString()];
    let parent = sectionArr[4];
    let xoffset = sectionArr[5];
    let yoffset = sectionArr[6];
    let alpha = sectionArr[7];
    let codes = sectionArr[8];

    //map the settings value to the index
    var settings = {}
    for (let i = 0; i < codes.length; i+=2) {
      let index = CRYPTMAP[codes[i]];
      let value = CRYPTMAP[codes[i+1]];
      settings[index] = value;
    }

    sections.push({
      "frame": frame,
      "framegroup": framegroup,
      "frameid": frameid,
      "point": point,
      "relativepoint": relativepoint,
      "parent": parent,
      "xoffset": xoffset,
      "yoffset": yoffset,
      "alpha": alpha,
      "settings": settings
    })
  }
  return {
    "config":globalConfig,
    "sections":sections
  }
}
const toString = (model)=>{
  let output = "";
  output += model.config.join(' ')
  model.sections.forEach(section => {
    output += ' ';
    output += [section.framegroup, section.frameid, REVPOINTS[section.point], REVPOINTS[section.relativepoint]].join(' ');
    output += ' ';
    output += [
      section.parent, 
      section.xoffset,
      section.yoffset,
      section.alpha
    ].join(' ');
    output += ' ';

    Object.entries(section.settings).forEach(([k, v]) => {
      output += [
        REVCRYPTMAP[k],
        REVCRYPTMAP[v]
      ].join('');
    });
  });
  return output;
}
export default {fromString, toString, ANCHORS}