import app from './server'

// Set application defaults
app.set('port', process.env.PORT || 3000)

// Sets server port and logs message on success
app.listen(app.get('port'), () =>
    console.log('Hope running on port: ', app.get('port'))
)
