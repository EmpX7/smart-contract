./trading_bot
├───components
│   ├───TradingPair.js  # A React component to show a trading pair
│   └───TradingPairList.js  # A React component to show a list of trading pairs
|
├───pages
│   ├───api
│   │   ├───trading_pairs  
│   │   │   ├───[pair].js  # API route for individual trading pair (BTC-ETH, BTC-USDT)
│   │   │   └───index.js   # API route for all trading pairs
│   ├───index.js  # Page that lists all trading pairs
│   └───pair
│       └───[id].js  # Page that shows data of a specific trading pair
|
├───public
│   ├───style.css  # Global styles
|
├───scripts
│   ├───fetch_data.py  # Python script for fetching crypto data and preparing the data
│   ├───train_model.py  # Python script for model training
│   └───predict.py      # Python script for predicting
|
├───utils
│   ├───call_python_script.js  # Helper util to call python scripts from Node.js
│   ├───constants.js  # File to define constants used across the app
│   ├───api_utils.js  # Helper util to define API related utilities
│   └───model_utils.js  # Helper util to call scripts related to python models
|
├───.env.local  # API keys
├───.gitignore
├───package.json
└───README.md
