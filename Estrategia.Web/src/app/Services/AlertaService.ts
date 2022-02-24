// import { Injectable } from '@angular/core';
// import Swal from 'sweetalert2'

// @Injectable({
//     providedIn: 'root',
// })
// export class AlertaService {

//     constructor() { }

//     sucesso(msg: string) {
//         Swal.fire(
//             'Sucesso!',
//             msg,
//             'success'
//         )
//     }

//     erro(msg: string) {
//         // Swal.fire(
//         //     'Erro!',
//         //     msg,
//         //     'error'
//         // )
//     }

//     confirm(title: string, text: string, callback:any) {

        
//         Swal.fire({
//             title: title,
//             text: text,
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Confirmar!'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 Swal.fire(
//                     'Deleted!',
//                     'Your file has been deleted.',
//                     'success'
//                 )
//             }
//         })
//     }
// }
