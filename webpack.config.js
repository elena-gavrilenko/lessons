// хранится вся информация о проекте
const path=require('path');
const htmlPlugin=require('html-webpack-plugin');

// добавляется для указания файла index.html webpack у

// webpack сборщик раличных файлов, который с помощью лоудеров может понимать любые файлы
// webpack несколько конфигураций production или development .Второе не меняется как буто скомпилирован для отладки. Продакшин компилируется так чтобы весил мало.
module.exports={
    entry: './src/index.ts',
    mode:'development',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js'
    },
    devServer: {
        open:true,
        static: path.resolve(__dirname,'build'),
        hot: true
    },
    // hot для автоматической обработки
    plugins: [
        new htmlPlugin({
            template:'public/index.html',
            inject:'body'
        })
        // plugin это post обработка loager предобработка
    ],
    module: {
        rules:[
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }
};