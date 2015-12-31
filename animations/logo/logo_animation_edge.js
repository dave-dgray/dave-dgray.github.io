/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['josefin-sans, sans-serif']='<script src=\"http://use.edgefonts.net/josefin-sans:i7,n7,n3,i4,i3,n4,i1,n6,n1,i6:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'SJ_Logo_14_black',
                type: 'image',
                rect: ['46px', '83px','87.6%','41.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SJ%20Logo%2014%20black.png",'0%','0%','657px','167px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['4.7%', '64.5%','90px','36px','auto', 'auto'],
                text: "design",
                align: "left",
                font: ['josefin-sans, sans-serif', 35, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['20.4%', '64.5%','152px','36px','auto', 'auto'],
                text: "illustration",
                align: "left",
                font: ['josefin-sans, sans-serif', 35, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'TextCopy2',
                type: 'text',
                rect: ['72.9%', '64.5%','183px','36px','auto', 'auto'],
                text: "art direction",
                align: "left",
                font: ['josefin-sans, sans-serif', 35, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Ellipse',
                type: 'ellipse',
                rect: ['603px', '270px','1px','6px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'TextCopy3',
                type: 'text',
                rect: ['43.7%', '64.5%','183px','36px','auto', 'auto'],
                text: "photography",
                align: "left",
                font: ['josefin-sans, sans-serif', 35, "rgba(0,0,0,1)", "400", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_TextCopy3}": [
                ["style", "top", '70%'],
                ["style", "height", '36px'],
                ["style", "width", '183px'],
                ["style", "left", '-54.4%'],
                ["style", "font-size", '35px']
            ],
            "${_Text}": [
                ["style", "top", '70%'],
                ["style", "height", '36px'],
                ["style", "font-size", '35px'],
                ["style", "left", '-93.47%'],
                ["style", "width", '90px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '70%'],
                ["style", "height", '36px'],
                ["style", "font-size", '35px'],
                ["style", "left", '-25.2%'],
                ["style", "width", '183px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(231,167,167,1.00)'],
                ["style", "min-width", '750px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["style", "width", '750px']
            ],
            "${_TextCopy}": [
                ["style", "top", '70%'],
                ["style", "height", '36px'],
                ["style", "width", '152px'],
                ["style", "left", '-77.73%'],
                ["style", "font-size", '35px']
            ],
            "${_SJ_Logo_14_black}": [
                ["style", "top", '83px'],
                ["style", "height", '41.75%'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '-673px'],
                ["style", "width", '87.6%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3250,
            autoPlay: true,
            timeline: [
                { id: "eid121", tween: [ "style", "${_TextCopy3}", "left", '44.27%', { fromValue: '-54.4%'}], position: 1635, duration: 1615, easing: "easeOutQuint" },
                { id: "eid124", tween: [ "style", "${_SJ_Logo_14_black}", "background-position", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 3250, duration: 0 },
                { id: "eid117", tween: [ "style", "${_TextCopy2}", "left", '72.93%', { fromValue: '-25.2%'}], position: 1635, duration: 1615, easing: "easeOutQuint" },
                { id: "eid131", tween: [ "style", "${_TextCopy}", "top", '70%', { fromValue: '70%'}], position: 3250, duration: 0 },
                { id: "eid134", tween: [ "style", "${_TextCopy2}", "top", '70%', { fromValue: '70%'}], position: 3250, duration: 0 },
                { id: "eid4", tween: [ "style", "${_SJ_Logo_14_black}", "left", '46px', { fromValue: '-673px'}], position: 0, duration: 3250, easing: "easeOutQuint" },
                { id: "eid133", tween: [ "style", "${_TextCopy3}", "top", '70%', { fromValue: '70%'}], position: 3250, duration: 0 },
                { id: "eid123", tween: [ "style", "${_Text}", "left", '5.33%', { fromValue: '-93.47%'}], position: 1635, duration: 1615, easing: "easeOutQuint" },
                { id: "eid119", tween: [ "style", "${_TextCopy}", "left", '20.8%', { fromValue: '-77.73%'}], position: 1635, duration: 1615, easing: "easeOutQuint" },
                { id: "eid132", tween: [ "style", "${_Text}", "top", '70%', { fromValue: '70%'}], position: 3250, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-88174060");
