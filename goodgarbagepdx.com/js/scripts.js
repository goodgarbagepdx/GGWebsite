window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    const navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // ZIP code checker
	const zips = [
                '97203', '97217', '97211', 
                '97218', '97220', '97005', 
                '97024', '97060', '97229', 
                '97113', '97123', '97123',
                '97132', '97140', '97070', 
                '97062', '97224', '97223', 
                '97008', '97225', '97210', 
                '97209', '97205', '97201', 
                '97239', '97219', '97034', 
                '97068', '97013', '97013', 
                '97035', '97212', '97232', 
                '97204', '97214', '97202', 
                '97222', '97267', '97027', 
                '97045', '97213', '97213',
                '97215', '97206', '97216', 
                '97266', '97068', '97015', 
                '97233', '97236', '97030', 
                '97080', '97089', '97009', 
                '97005'];

    const errMsg = document.getElementById('submitErrorMessage');
    const successMsg = document.getElementById('submitSuccessMessage');
    const submitBtn = document.getElementById('submitButton');

    submitBtn.addEventListener('click', e => {
        let zip = document.getElementById('zip').value;

        successMsg.classList = 'd-none';
        errMsg.classList = 'd-none';

        if (zips.includes(zip)) {
            successMsg.classList.remove('d-none');
            console.log('success', zip);
        } else {
            errMsg.classList.remove('d-none');
            console.log('fail', zip);
        }
    });
});
