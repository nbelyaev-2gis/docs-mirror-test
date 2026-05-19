workspace {
    
    !identifiers hierarchical
    
    model {
    
        softwareSystem = softwareSystem "On-Premise"{
    
        
        platform = container "On-Premise GIS Platform" {
            
            front = group "Frontend side" {
                adminui = component "Admin Interface" "Web application for configuring the service"
                gisui = component "GIS Tools Web Interface" "Set of tool for working with geospatial data"
            }
            
            back = group "Server side" {
                spcore = component "SPCore" "Backend service that implements geospatial logic"
                zoo = component "Apache ZooKeeper" "Message queue"
                postgresql = component "PostgreSQL" "Storage of access data and configurations" "" "storage"
                s3 = component "S3 compatible storage" "Storage of raster images" "" "storage"
            }
            
            spcore -> s3 "Stores raster images at"
            spcore -> postgresql "Stores data layers, configuration, users, and roles at"
            spcore -> gisui "Provides data to work with to"
            adminui -> spcore "Manages configuration and access of"
            spcore -> zoo "Manages tasks using"
            
        }
        
        internet = container "Internet" {
            update = component "Public traffic update server" "Public servers to get and update traffic data" "" "external,nfocus"
        }
        
        traffic = container "Traffic Proxy service" {
            proxy = component "NGINX reverse proxy" "Provides internet access to public servers with traffic data" "" "nfocus"
        }
        
        traffic.proxy -> internet.update "Gets traffic data from"
        platform.spcore -> traffic.proxy "Updates traffic data using"
        
        other = container "Other services" {
            services = component "Other On-Premise services" "Maps, search, and navigation services" "" "nfocus"
        }
        
        platform.spcore -> other.services "Gets data for GIS tasks from"
        
        
        
        }
    }
        

        
    
    views {
    
        component softwareSystem.platform "components" {
            include element.type==component
            autolayout lr 400 100
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