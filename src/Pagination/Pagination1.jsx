import React from 'react'

const bootstrapCDN = `<div>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
</div>`


const Pagination1 = () => {
    return (
        <div>
            
<div class="container ">

</div>
<div class="container ">
    
    <table class="table table-dark" id="our-table">
        <thead>
            <tr>
                <th>Rank</th>
                <th>First</th>
                <th>Last</th>
            </tr>
        </thead>
        <tbody id="table-body">

        </tbody>
    </table>
</div>

<div class="container ">
    <div id="pagination-wrapper"></div>
</div>

        </div>
    )
}

export default Pagination1
