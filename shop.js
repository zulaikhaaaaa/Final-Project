document.addEventListener('DOMContentLoaded', function() { //to active the toggle method for search abr
    const icon = document.querySelector('.icon');
    const search = document.querySelector('.search');

    icon.addEventListener('click', function() {
        search.classList.toggle('active');
    });
    const button = document.getElementById('button');
    const display_order = document.getElementById('display_order');
    const display_apple = document.getElementById('display_apple');
    const display_grape = document.getElementById('display_grape');
    const display_orange = document.getElementById('display_orange');
    const display_mango = document.getElementById('display_mango');
    const display_strawberry = document.getElementById('display_strawberry');
    const display_watermelon = document.getElementById('display_watermelon');
    const total = document.getElementById('total');
    const thanks = document.getElementById('thanks')

    // Function to calculate total for each juice type
    function Total_apple(a_qty){
        return a_qty ? a_qty * 2 : 0; // If a_qty is truthy, calculate total; otherwise, default to 0
    }

    function Total_grape(g_qty){
        return g_qty ? g_qty * 2 : 0; // If g_qty is truthy, calculate total; otherwise, default to 0
    }

    function Total_orange(o_qty){
        return o_qty ? o_qty * 2 : 0; // If o_qty is truthy, calculate total; otherwise, default to 0
    }

    function Total_mango(m_qty){
        return m_qty ? m_qty * 2 : 0; // If m_qty is truthy, calculate total; otherwise, default to 0
    }

    function Total_strawberry(s_qty){
        return s_qty ? s_qty * 2 : 0; // If s_qty is truthy, calculate total; otherwise, default to 0
    }

    function Total_watermelon(w_qty){
        return w_qty ? w_qty * 2 : 0; // If w_qty is truthy, calculate total; otherwise, default to 0
    }

    button.addEventListener('click', function(event) {
        event.preventDefault();

        // Get input values
        const a_qty = parseInt(document.getElementById('a_qty').value) || 0;
        const g_qty = parseInt(document.getElementById('g_qty').value) || 0;
        const o_qty = parseInt(document.getElementById('o_qty').value) || 0;
        const m_qty = parseInt(document.getElementById('m_qty').value) || 0;
        const s_qty = parseInt(document.getElementById('s_qty').value) || 0;
        const w_qty = parseInt(document.getElementById('w_qty').value) || 0;

        // Calculate individual totals
        let total_a = Total_apple(a_qty);
        let total_g = Total_grape(g_qty);
        let total_o = Total_orange(o_qty);
        let total_m = Total_mango(m_qty);
        let total_s = Total_strawberry(s_qty);
        let total_w = Total_watermelon(w_qty);

        // Calculate total amount
        let total_amount = total_a + total_g + total_o + total_m + total_s + total_w;

        // Prepare display messages
        let msg1 = "Name: "+document.getElementById('c_name').value + "<br>" + "Email: " + document.getElementById('c_email').value + "<br>" +"Tel: " +document.getElementById('c_tel').value + "<br>" +"Address: " + document.getElementById('c_address').value + ", " + document.getElementById('c_city').value + ", " + document.getElementById('c_state').value + ", " + document.getElementById('c_zip').value;
        let msg2 = "APPLE " + a_qty + " = $" + total_a;
        let msg3 = "GRAPE " + g_qty + " = $" + total_g;
        let msg4 = "ORANGE " + o_qty + " = $" + total_o;
        let msg5 = "MANGO " + m_qty + " = $" + total_m;
        let msg6 = "STRAWBERRY " + s_qty + " = $" + total_s;
        let msg7 = "WATERMELON " + w_qty + " = $" + total_w;
        let msg8 = "Total = $" + total_amount;
        let msg9 = "Thank you for choosing our product :"

        // Display the calculated values
        display_order.innerHTML = msg1;
        display_apple.innerHTML = msg2;
        display_grape.innerHTML = msg3;
        display_orange.innerHTML = msg4;
        display_mango.innerHTML = msg5;
        display_strawberry.innerHTML = msg6;
        display_watermelon.innerHTML = msg7;
        total.innerHTML = msg8;
        thanks.innerHTML = msg9;
    });
});
