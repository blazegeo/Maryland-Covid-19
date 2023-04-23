function initializeViz() {
var placeholderDiv = document.getElementById("tableauViz");
var url = "https://public.tableau.com/views/MDCovid-19/Story1?:language=en-US&:display_count=n&:origin=viz_share_link";
var options = {
 width: '600px',
 height: '600px',
 hideTabs: true,
 hideToolbar: true,
 };
viz = new tableau.Viz(placeholderDiv, url, options);
}
