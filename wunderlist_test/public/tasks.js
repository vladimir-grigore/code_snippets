$(document).ready(function(){

  $("#all_tasks").on('click', () => {
    if($(".all_tasks input").hasClass("hidden")){
      $(".all_tasks input").removeClass("hidden");
      $("#get_tasks").removeClass("hidden");  
    } else {
      $(".all_tasks input").addClass("hidden");
      $("#get_tasks").addClass("hidden");
    }
  });

  $("#get_tasks").on('click', () => {
    if($(".all_tasks input").val()){
      var list_id = $(".all_tasks input").val();
      all_tasks(list_id);
    }
  });

  $("#single_task").on('click', () => {
    if($(".single_task input").hasClass("hidden")){
      $(".single_task input").removeClass("hidden");
      $("#get_task").removeClass("hidden");  
    } else {
      $(".single_task input").addClass("hidden");
      $("#get_task").addClass("hidden");
    }
  });

  $("#get_task").on('click', () => {
    if($(".single_task input").val()){
      var list_id = $(".single_task input").val();
      single_task(list_id);
    }
  });

  $("#create_task").on('click', () => {
    if($(".add_task input").hasClass("hidden")){
      $(".add_task input").removeClass("hidden");
      $("#add_task").removeClass("hidden");  
    } else {
      $(".add_task input").addClass("hidden");
      $("#add_task").addClass("hidden");
    }
  });

  $("#add_task").on('click', () => {
    if($("#id_new").val() && $("#title_new").val()){
      var list_id = $("#id_new").val();
      var task_title = $("#title_new").val();
      add_task(list_id, task_title);
    }
  });

  $("#update_task").on('click', () => {
    if($(".update_task input").hasClass("hidden")){
      $(".update_task input").removeClass("hidden");
      $("#update").removeClass("hidden");  
    } else {
      $(".update_task input").addClass("hidden");
      $("#update").addClass("hidden");
    }
  });

  $("#update").on('click', () => {
    if($("#title_update").val() && $("#id_update").val() && $("#revision_update").val()){
      var id = $("#id_update").val();
      var revision = $("#revision_update").val();
      var title = $("#title_update").val();
      update_task(id, revision, title);
    }
  });

  $("#delete_task").on('click', () => {
    if($(".delete_task input").hasClass("hidden")){
      $(".delete_task input").removeClass("hidden");
      $("#delete").removeClass("hidden");  
    } else {
      $(".delete_task input").addClass("hidden");
      $("#delete").addClass("hidden");
    }
  });

  $("#delete").on('click', () => {
    if($("#revision_delete").val() && $("#id_delete").val()){
      var id = $("#id_delete").val();
      var revision = $("#revision_delete").val();
      delete_task(id, revision);
    }
  });

  ////////// Ajax calls ///////////

  function all_tasks(id){
    $.ajax({
      url: `/api/list/${id}/tasks`,
      method: "GET",
    }).done((data) => {
      console.log(data);
    });
  }

  function single_task(id){
    $.ajax({
      url: `/api/tasks/${id}`,
      method: "GET",
    }).done((data) => {
      console.log(data);
    });
  }

  function add_task(list_id, task_title){
    $.ajax({
      url: `/api/tasks/new`,
      method: "POST",
      data: { 
        id: list_id,
        title: task_title }
    }).done((data) => {
      console.log(data);
    });
  }

  function update_task(id, revision, title){
    $.ajax({
      url: `/api/tasks/${id}`,
      method: "PATCH",
      data: { id, revision, title }
    }).done((data) => {
      console.log(data);
    });
  }
  
  function delete_task(id, revision){
    $.ajax({
      url: `/api/tasks/${id}`,
      method: "DELETE",
      data: { revision }
    }).done((data) => {
      console.log(data);
    });
  }
  
});