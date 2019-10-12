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
      title: "Contact Admin or Judge",
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
    center
    `,
          })
          resolve(true)
        } else if (
          result.dismiss === swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'Your imaginary file is safe :)',
            type: 'success',
            backdrop:
              `  
            rgba(0,0,0,0.6)
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
        text: "",
        type: 'warning',
        width: 600,
        padding: '3em',
        background: '',
        backdrop: `
    rgba(0,0,0,0.6)
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
    center
    `,
          })
          resolve(true)
        } else if (
          result.dismiss === swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'You are still logged in',
            backdrop: `
    rgba(0,0,0,0.6)
    center
    
    `,
          })
          resolve(false)
        }
        resolve(false)
      })
    })
  }
  static comingSoon() {
    return new Promise((resolve, reject) => {
      const swalWithBootstrapButtons = swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger mr-5'
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: 'Coming Soon!',
        text: "",
        type: 'warning',
        width: 600,
        padding: '3em',
        background: '',
        backdrop: `
    rgba(0,0,0,0.6)
    center left
    `,
        confirmButtonText: 'Okay ',
        reverseButtons: true,
      }).then((result) => {

        resolve(false)
      })
    })
  }
}