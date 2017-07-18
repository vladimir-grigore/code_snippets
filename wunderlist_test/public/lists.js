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
      add_list(list_name);
    }
  });

  $("#update_list").on('click', () => {
    if($(".update_list input").hasClass("hidden")){
      $(".update_list input").removeClass("hidden");
      $("#update").removeClass("hidden");  
    } else {
      $(".update_list input").addClass("hidden");
      $("#update").addClass("hidden");
    }
  });

  $("#update").on('click', () => {
    if($("#title_update").val() && $("#revision_update").val() && $("#id_update").val()){
      var id = $("#id_update").val();
      var title = $("#title_update").val();
      var revision = $("#revision_update").val();
      update_list(id, title, revision);
    }
  });

  $("#delete_list").on('click', () => {
    if($(".delete_list input").hasClass("hidden")){
      $(".delete_list input").removeClass("hidden");
      $("#delete").removeClass("hidden");  
    } else {
      $(".delete_list input").addClass("hidden");
      $("#delete").addClass("hidden");
    }
  });

  $("#delete").on('click', () => {
    if($("#revision_delete").val() && $("#id_delete").val()){
      var id = $("#id_delete").val();
      var revision = $("#revision_delete").val();
      delete_list(id, revision);
    }
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

  function update_list(id, list_name, revision){
    $.ajax({
      url: `/api/list/update`,
      method: "PATCH",
      data: { 
        id: id,
        revision: revision,
        name: list_name,
      }
    }).done((data) => {
      console.log(data);
    });
  }
  
  function delete_list(id, revision){
    $.ajax({
      url: `/api/list/delete`,
      method: "DELETE",
      data: { 
        id: id,
        revision: revision,
      }
    }).done((data) => {
      console.log(data);
    });
  }
  
});