export interface colorT{
    name:string,
    colors:[number[]]
  }

export const colorList: colorT[] = [
    {name:"red",colors:[[255,0,0,1]]},
    {name:"orange",colors:[[235,107,86,1]]},
    {name:"yellow",colors:[[190, 200, 50,1]]},
    {name:"green",colors:[[0,255,0,1]]},
    {name:"blue",colors:[[0,0,255,1]]},
    {name:"violet",colors:[[85,0,135,1]]},
    {name:"black",colors:[[0,0,0,1]]},
    {name:"white",colors:[[255,255,255,1]]},
    {name:"teal",colors:[[0,255,255,1]]},
    {name:"magenta",colors:[[255,0,255,1]]},
    {name:"cyan",colors:[[255,255,0,1]]}
];

// [ red[n,n,n,n], green[n,n,n,n], blue[n,n,n,n], ... ]
export const getRGBAValues = () : [number[]][] =>{
  const colorValues = colorList.map((color) => {return color.colors});
  return colorValues;
}

export const toStringRGBA = (colorValue: [number[]]) : string => {

  function formatRGBA(colorValue: number[]) : string {
    return 'rgba('+colorValue.toString()+')'; 
  }
  let rgbaVals = '';
  colorValue.forEach((color)=>{
    rgbaVals += formatRGBA(color);
  });

  return rgbaVals;
}

export const findColor = (value:string) => {
  const color = colorList.find((color) => color.name === value);
  return color;
}
