import swal from 'sweetalert2'
export default class NotificationService {
  static toast(text = "", title = text, timer = 5500) {
    swal.fire({
      title,
      type: "success",
      timer,
      showConfirmButton: false,
      position: "top-right",
      toast: true
    });
  }

  static toastError(error) {
    if (error.isAxiosError) {
      error.message = error.response.data
    }
    swal.fire({
      title: "Fill in required field",
      text: error.message,
      type: "error",
      timer: 8500,
      showConfirmButton: false,
      position: "top-right",
      toast: true
    });
  }

  static toastLoginError(error) {
    if (error.isAxiosError) {
      error.message = error.response.data
    }
    swal.fire({
      title: "Please enter a valid email and password",
      text: error.message,
      type: "error",
      timer: 8500,
      showConfirmButton: false,
      position: "top-right",
      toast: true
    });
  }



  static confirmDelete() {
    return new Promise((resolve, reject) => {
      const swalWithBootstrapButtons = swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger mr-5',
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        width: 600,
        padding: '3em',
        background: '',
        backdrop: `
    rgba(0,0,0,0.6)
    url("")
    center left
    no-repeat
  `,
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,

      }).then((result) => {
        if (result.value) {
          swalWithBootstrapButtons.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            type: 'error',
            backdrop: `
    rgba(0,0,0,0.6)
    url("https://media.giphy.com/media/111ebonMs90YLu/giphy.gif")
    center
  `,
          })
          resolve(true)
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'Your imaginary file is safe :)',
            type: 'success',
            backdrop:
              `  
            rgba(0,0,0,0.6)
            url("https://media.giphy.com/media/CiTLZWskt7Fu/giphy.gif")    
            center 
            `,
          })
          resolve(false)
        }
        resolve(false)
      })
    })

  }

  static confirmLogout() {
    return new Promise((resolve, reject) => {
      const swalWithBootstrapButtons = swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger mr-5'
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: 'Are you sure you want to log out?',
        text: "You will have to log back in to view your boards!",
        type: 'warning',
        width: 600,
        padding: '3em',
        background: '',
        backdrop: `
    rgba(0,0,0,0.6)
    url("https://media.giphy.com/media/3o7aTskHEUdgCQAXde/giphy.gif")
    center left
   
  `,
        showCancelButton: true,
        confirmButtonText: 'Yes, Logout!',
        cancelButtonText: 'No, Stay here!',
        reverseButtons: true,
      }).then((result) => {
        if (result.value) {
          swalWithBootstrapButtons.fire({
            title: 'You have been logged out.',
            backdrop: `
    rgba(0,0,0,0.6)
    url("https://media.giphy.com/media/33E7ZjlQEMgF6kbkhY/giphy.gif")
    center
  `,
          })
          resolve(true)
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'You are still logged in',
            backdrop: `
    rgba(0,0,0,0.6)
    url("https://media.giphy.com/media/ZEU9ryYGZzttn0Cva7/giphy.gif")
    center
   
  `,
          })
          resolve(false)
        }
        resolve(false)
      })
    })
  }
}