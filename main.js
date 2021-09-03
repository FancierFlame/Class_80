var name_of_students=[];

function submit(){
    
    var temp_array = [];

    for (j = 1; j <=4 ; j++){
        var temp_name_students = document.getElementById("name_of_student_" + j).value;
        name_of_students.push(temp_name_students);
        console.log(temp_name_students);
    }

    var length= name_of_students.length;

    for (k = 0 ; k < length; k++){
        temp_array.push("<h4> NAME - " + name_of_students[k] + "</h4>" );
        console.log(temp_array);
    }

    document.getElementById("div_with_commas").innerHTML = temp_array;

    var remove_commas = temp_array.join(" ");

    document.getElementById("div_without_commas").innerHTML = remove_commas;

    document.getElementById("sort_button").style.display = "inline-block";
    document.getElementById("submit_button").style.display = "none";

}

    function sort_name() {
        name_of_students.sort();

        var temp_array_2 = [];

        var length_2 = name_of_students.length;

        for (k = 0 ; k < length_2; k++){
            temp_array_2.push("<h4> NAME - " + name_of_students[k] + "</h4>" );
            console.log(temp_array_2);
        }

        var remove_commas_2 = temp_array_2.join(" ");

        document.getElementById("div_without_commas").innerHTML = remove_commas_2;
        console.log(remove_commas_2);
    }

    function new_update() {
        document.getElementById("div_without_commas").innerHTML = "<h1>" + name_of_students +"</h1>";
    }