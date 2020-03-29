// Original Okapi

double k1 = 1.2;
int k3 = 1000;
double b = 0.75;

for(all) {
    score +=
    log((docN - DF[i] + 0.5)/(DF[i] + 0.5)) *
    ((k1 + 1) * tf[i])/(k1 * ((1 - b) + (b * docLength/docLengthAvg)) + tf[i]) *
    ((k3 + 1) * qf[i])/(k3 + qf[i])
}


// Modified Okapi UIUC

for(all) {
    score +=
    log((docN + 1)/(DF[i])) *
    ((k1 + 1) * tf[i])/(k1 * ((1 - b) + (b * docLength/docLengthAvg)) + tf[i]) *
    ((k3 + 1) * qf[i])/(k3 + qf[i])
}

// Okapi BM25

for(all) {
    score +=
    log((docN - DF[i] + 0.5)/(DF[i] + 0.5)) *
    ((k1 + 1) * tf[i])/(k1 * ((1 - b) + (b * docLength/docLengthAvg)) + tf[i]);
}


// Okapi BM25+

for(all) {
    score +=
    log((docN - DF[i] + 0.5)/(DF[i] + 0.5)) *
    (((k1 + 1) * tf[i])/(k1 * ((1 - b) + (b * docLength/docLengthAvg)) + tf[i]) + d);
}

// Okapi BM25L

for(all) {
    score +=
    log((docN + 1)/(DF[i] + 0.5)) *
    ((k1 + 1) * tf[i])/(k1 * ((1 - b) + (b * docLength/docLengthAvg)) + tf[i]);
}

//  Atire BM25

for(all) {
    score +=
    log((docN)/(DF[i])) *
    ((k1 + 1) * tf[i])/(k1 * ((1 - b) + (b * docLength/docLengthAvg)) + tf[i]);
}

// BM25+ Different IDF (log component)

for(all) {
    score +=
    log((docN + 1)/(DF[i])) *
    (((k1 + 1) * tf[i])/(k1 * ((1 - b) + (b * docLength/docLengthAvg)) + tf[i]) + d);
}

// TF X IDF

for(all) {
    score +=
    log((docN + 1)/(DF[i])) *
    (1 + log(1 + log(((tf[i])/((1 - b) + (b * docLength/docLengthAvg))) + d)));
}

