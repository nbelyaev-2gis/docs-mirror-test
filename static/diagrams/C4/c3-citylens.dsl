workspace {
    
    !identifiers hierarchical
    
    model {
    
        softwareSystem = softwareSystem "On-Premise"{
    
        
        citylens = container "On-Premise CityLens" {
            
            front = group "Driver side" {
                app = component "Mobile App" "Android/iOS application for collecting tracks"
            }
            
            back = group "Administrator side (On-Premise)" {
            
                s3 = component "S3 compatible storage" "Frames data storage" "" "storage"
                kafka = component "Apache Kafka" "Access and permissions storage" "" "storage"
                postgresql = component "PostgreSQL" "Tasks data storage" "" "storage"

                web = component "CityLens Web" "Admin dashboard for viewing detailed info"
                api = component "CityLens API" "API for managing external data and requests"
                routesapi = component "CityLens Routes API" "API for creating tasks and routes"
                routesworker = component "CityLens Routes worker" "Internal planning service"
                ui = component "CityLens Routes UI" "Admin web application for managing tasks"

            }
            
            app -> api "Sends tracks to and gets routes from"
            
            api -> s3 "Stores frames at"
            api -> kafka "Stores metadata at"
            api -> routesapi "Sends routing requests to"
            
            web -> s3 "Gets frames data from"
            web -> kafka "Gets tracks data from"
            
            routesapi -> postgresql "Stores tasks at"
            
            routesworker -> kafka "Gets metadata from"
            routesworker -> routesapi "Gets task statuses from"
            
            ui -> routesapi "Sends tasks info to"
            
            }
            
        other = container "On-Premise services" {
            pro = component "Pro" "Service for analyzing geodata for business purposes" "" "nfocus"
            apis = component "APIs" "Navigation, search, and map APIs" "" "nfocus"
            
        }
        
        citylens.ui -> other.apis
        
        citylens.routesapi -> other.apis
        
        citylens.routesworker -> other.pro "Sends data on tasks to"
        
        
        }
    }
        

        
    
    views {
    
        component softwareSystem.citylens "components" {
            include element.type==component
            autolayout lr 500 200
        }
        
        
       styles {
            element "Element" {
                background #1168bd
                color #ffffff
            }
            element "storage" {
                shape cylinder
                background #dddddd
                color #000000
            }
            element "external" {
                background green
                color white
                opacity 70
            }
            element "nfocus" {
                opacity 70
            }
        }
    }

}