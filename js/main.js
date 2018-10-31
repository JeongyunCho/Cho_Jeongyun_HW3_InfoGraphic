(() => {

    //grab the car button
    function fetchData() {
        let targetURL = `./includes/connect.php`;

        fetch(targetURL) // go get data and bring it back! good doogy

        .then(res => res.json())
        .then(data => {
            console.log(data);
            parseCarData(data[0]);
        })
        .catch(function(error) {
            console.error(error);
        });
    }

    function parseCarData(info) {
        //debugger;
        // take the database data and put it on the page
        const { main_heading, head_1, head_3, head_4, element_1, element_2, element_3, element_4 } = info;
        // take the database data and put it on the page
        document.querySelector("h2").textContent = main_heading;
        document.querySelector("#head1").textContent = head_1;
        document.querySelector("#head3").textContent = head_3;
        document.querySelector("#head4").textContent = head_4;
        document.querySelector("#el1").textContent = element_1;
        document.querySelector("#el2").textContent = element_2;
        document.querySelector("#el3").textContent = element_3;
        document.querySelector("#el4").textContent = element_4;
    };


    fetchData();
})();