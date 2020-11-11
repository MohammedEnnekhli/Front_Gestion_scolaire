/* $(function() {
    // Sidebar toggle behavior
    $('#sidebarCollapse').on('click', function() {
      $('#sidebar, #content').toggleClass('active');
    });
  }); */

  function myTest() {
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar, #content').toggleClass('active');
      });
}

function toggleProf() {
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
      });
}
