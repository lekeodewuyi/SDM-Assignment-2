


//Pivoted Original

double s = 0.2;

for(all) {
    score +=
    (1 + log(1 + log(tf[i])))/((1 - s) + s * docLength/docLengthAvg) *
    qf[i] *
    log((docN + 1)/DF[i]);
}


// Pivoted Original 2

double s = 0.2;

for(all) {
    score +=
    (1 + log(1 + log(tf[i])))/((1 - s) + s * docLength/docLengthAvg) *
    qf[i] *
    log((docN + 1)/(DF[i]))
}