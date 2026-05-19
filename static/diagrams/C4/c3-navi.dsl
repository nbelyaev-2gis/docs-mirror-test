workspace {
    
    !identifiers hierarchical
    
    model {
    
        softwareSystem = softwareSystem "On-Premise"{
    
        
        navi = container "Navigation" "Enables building routes and getting route information" {
            
            front = group "Frontend side" {
                webapp = component "Web Application" "Initiates routing requests"
                mobilesdk = component "Mobile SDK" "Initiates routing requests"
            }
            
            back = group "Server side" {
                ncastle = component "Navi-Castle" "Manages data for routing requests"
                nback = component "Navi-Back" "Processes requests"
                nfront = component "Navi-Front" "Handles requests from web app"
                nrouter = component "Navi-Router" "Verifies requests and performs routing"
                #dmasync = component "Distance Matrix Async API" "Handles routing requests for large number of points"
                restrictions = component "Restrictions API" "Provides data on road closures"
            }

            ncastle -> nback "Sends imported data to"
            webapp -> nfront "Sends requests via RESTful API to"
            mobilesdk -> nfront "Sends requests via RESTful API to"
            nfront -> nrouter "Transfers requests from web apps to and gets response from"
            nfront -> nback "Transfers requests from web apps to and gets response from"
            #nback -> nfront "Returns request result to"
            #webapp -> dmasync "Sends async requests via RESTful API to"
            webapp -> restrictions "Sends requests via RESTful API to"
            restrictions -> nback "Gets geodata from"
            restrictions -> ncastle "Gets geodata from"
            
            
            }
            
                
            storage = container "Data storage" {
                s3 = component "S3 compatible storage" "Data storage" "" "storage"
                postgresql = component "PostgreSQL" "Data storage" "" "storage"
            }
            
            navi.ncastle -> storage.s3 "Imports data from"
            #navi.dmasync -> storage.s3
            #navi.dmasync -> storage.postgresql "Stores data at"
            navi.restrictions -> storage.postgresql "Stores data at"
            navi.nback -> storage.s3 "Gets data from"
            
            proxy = container "Traffic Proxy service" {
                tproxy = component "NGINX reverse proxy" "Provides internet access to public servers with traffic data" "" "nfocus"
            }
            
            navi.nback -> proxy.tproxy
            
            internet = container "Internet" {
                update = component "Public traffic update server" "Public servers to get and update traffic and other data" "" "external"
            }
            
            proxy.tproxy -> internet.update "Updates traffic data using"
            
            broker = container "Broker" {
                kafka = component "Apache Kafka" "Event data storage" "" "storage"
            }
            
            #navi.dmasync -> broker.kafka "Creates events at"
            navi.nback -> broker.kafka "Reads event data from an"
        
        


            
        }

    
    }
    
    views {
    
        component softwareSystem.navi "components" {
            include element.type==component
            autolayout lr 400 200
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
                opacity 70
            }
            element "nfocus" {
                opacity 70
            }
        }
    }

}