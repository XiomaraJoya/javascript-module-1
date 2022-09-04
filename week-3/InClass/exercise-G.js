function getAge (year) {
    return new Date().getFullYear() - year
    }
    
    function getDrivingStatus(year2){
    
        const age= getAge(year2)
        if ( age >= 17){
            console.log(`Born in ${year2} can drive`) ;
        }
        else {
            const yearsToDrive= 17-age
            console.log(`Born in ${year2} can drive in ${yearsToDrive} years`) 
        }
    }
    
    const birthYears= [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ]
    const canDrive= birthYears.map(getDrivingStatus)