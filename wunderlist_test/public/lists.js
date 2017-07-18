$(document).ready(function(){

  $("#all_lists").on('click', () => {
    loadLists();
  });

  $("#single_lists").on('click', () => {
    loadSingleList('232573577');
  });

  $("#create_list").on('click', () => {
    if($(".add_list input").hasClass("hidden")){
      $(".add_list input").removeClass("hidden");
      $("#add_list").removeClass("hidden");  
    } else {
      $(".add_list input").addClass("hidden");
      $("#add_list").addClass("hidden");
    }
  });

  $("#add_list").on('click', () => {
    if($(".add_list input").val()){
      var list_name = $(".add_list input").val();
    }
    add_list(list_name);
  });
  
  // Ajax call for GET-ing all lists
  function loadLists(){
    $.ajax({
      url: '/api/lists',
      method: "GET"
    }).done((data) => {
      console.log(data);
    });
  }

  // Load a single list by id
  function loadSingleList(id){
    $.ajax({
      url: `/api/list/${id}`,
      method: "GET",
    }).done((data) => {
      console.log(data);
    });
  }

  function add_list(list_name){
    $.ajax({
      url: `/api/list/new`,
      method: "POST",
      data: { name: list_name }
    }).done((data) => {
      console.log(data);
    });
  }
  
});