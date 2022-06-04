let imagenTotal= document.getElementById("cajas");
                   let N=5;
                   let imagen=[
                           "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Cordoba_capital.jpg/245px-Cordoba_capital.jpg",
                                 
                            ];
                    let arreglo = "<ul class='ul'>";
                  
                          for(let i=0 ; i < N;i++){
                              arreglo += "<li>"+
                                   "<a >" + "<img src='"+ imagen+"'>"+"</a>"+

                              "</li>";
                          }
                 
                
                         arreglo +="</ul>";

                         imagenTotal.innerHTML=arreglo;