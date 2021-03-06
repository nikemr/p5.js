function brain() {
    return tf.tidy(() => {
    	inputLayerUnits=9;
        const input = tf.input({ shape: [inputLayerUnits] });
        hiddenLayerUnits=54;
        const hidden = tf.layers.dense({
            units: hiddenLayerUnits,
            activation: 'sigmoid'
        }).apply(input);
        hidden2LayerUnits=27;
        const hidden2 = tf.layers.dense({
            units: hidden2LayerUnits,
            activation: 'sigmoid'
        }).apply(hidden);
        outputLayerUnits=2;
        const output = tf.layers.dense({
            units: outputLayerUnits,
            activation: 'tanh'
        }).apply(hidden2);
        const model = tf.model({ inputs: input, outputs: [hidden, hidden2,output] });

        return model;
    });
}