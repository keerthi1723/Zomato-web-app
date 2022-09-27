import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="page-footer font-small blue mt-4" style={{backgroundColor : "#FF9900"}}>

          <div className="footer-copyright text-center py-3">© 2022 Copyright:
            <a href="/"> MDBootstrap.com</a>
          </div>

        </footer>
      </>
    )
  }
}

export default Footer
