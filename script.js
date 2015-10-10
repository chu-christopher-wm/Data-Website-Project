/**
 * Created by session2 on 10/8/15.
 */
// Graph 1
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Car Company', 'Net-Worth'],
        ['Toyota', 34900000000],
        ['BMW', 28960000000],
        ['Volkswagen', 27060000000],
        ['Mercedes-Benz', 24170000000],
        ['Honda', 22150000000]
    ]);

    var options = {
        title: 'Top 5 Car Companies Net-Worth 2014',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Money in Billions',
            minValue: 0
        },
        vAxis: {
            title: 'Car Company'
        },
        left: -100,
        width:'100%'
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}
//Graph 2

google.load('visualization', '1', {packages: ['corechart']});
google.setOnLoadCallback(drawBasic1);

function drawBasic1() {

    var data = google.visualization.arrayToDataTable([
        ['Car Company', 'Net-Worth'],
        ['Toyota', 37800000000],
        ['BMW', 27500000000],
        ['Audi', 12800000000],
        ['Mercedes-Benz', 22500000000],
        ['Honda', 22600000000]
    ]);

    var options = {
        title: 'Car Company Net Worth in 2015',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Population',
            minValue: 0
        },
        vAxis: {
            title: 'City'
        },
        backgroundColor: "white",
        chartArea2:{left:20,top:0,width:'50%',height:'75%'}
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart1_div'));

    chart.draw(data, options);
}