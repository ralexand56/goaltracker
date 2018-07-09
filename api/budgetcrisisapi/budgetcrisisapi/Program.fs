namespace budgetcrisisapi

open System
open System.Collections.Generic
open System.IO
open System.Linq
open System.Threading.Tasks
open Microsoft.AspNetCore
open Microsoft.AspNetCore.Hosting
open Microsoft.Extensions.Configuration
open Microsoft.Extensions.Logging
open FireSharp.Interfaces
open FireSharp

module Program =

    let _config = new IFirebaseConfig {
        AuthSecret = "AIzaSyAnpAEfSs_0v5GkxZXbCWM09nrrEBTKLBk",
        BasePath = "https://budgetcrisis-86b12.firebaseio.com"
    };

    let client = new FirebaseClient(_config);

    let exitCode = 0

    let CreateWebHostBuilder args =
        WebHost
            .CreateDefaultBuilder(args)
            .UseStartup<Startup>();            

    [<EntryPoint>]
    let main args =
        CreateWebHostBuilder(args).Build().Run()

        exitCode
